import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import * as THREE from 'three';

// Motion graphics for live presentation. No narration: let the presenter explain.
// 0-3s: question, 3-9s: 3D polymer, 9-14s: material families, 14-18s: return question.
// Polymer visuals are schematic: no atom-accurate scale, bonding, or conformation implied.
const C = {bg: '#061A23', cyan: '#55E3E4', gold: '#FFCB69', purple: '#A3A2FC', white: '#F5FCFF', dim: '#BDD3D8'};
const fade = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, start + 12, end - 12, end], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

const Bond: React.FC<{a: THREE.Vector3; b: THREE.Vector3; color: string}> = ({a, b, color}) => {
  const direction = b.clone().sub(a);
  const midpoint = a.clone().add(b).multiplyScalar(0.5);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  return (
    <mesh position={midpoint.toArray()} quaternion={quaternion}>
      <cylinderGeometry args={[0.035, 0.035, direction.length(), 9]} />
      <meshStandardMaterial color={color} metalness={0.24} roughness={0.34} />
    </mesh>
  );
};

const Strand: React.FC<{y: number; z: number; color: string; phase: number; progress: number}> = ({y,z,color,phase,progress}) => {
  const pts = Array.from({length: 12}, (_, i) =>
    new THREE.Vector3(-4.6 + i * 0.84, y + Math.sin(i * 0.7 + phase) * 0.17, z + Math.cos(i * 0.45 + phase) * 0.13)
  );
  const count = Math.max(0, Math.min(pts.length, Math.floor(progress * (pts.length + 1))));
  return <group>
    {pts.slice(0, count).map((p, i) => (
      <mesh position={p.toArray()} key={`atom-${i}`}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.18} metalness={0.18} emissive={color} emissiveIntensity={0.08} />
      </mesh>
    ))}
    {pts.slice(1, count).map((p, i) => <Bond key={`bond-${i}`} a={pts[i]} b={p} color={color}/>)}
  </group>;
};

const PolymerStructure: React.FC = () => {
  const f = useCurrentFrame();
  const appearing = interpolate(f, [90, 185], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const pitch = Math.sin(f / 48) * 0.13;
  const yaw = (f - 90) * 0.004;
  const family = f >= 270;
  const colors = family ? [C.cyan, C.gold, C.purple] : [C.cyan, '#39BAC5', '#75F4ED'];
  return <group rotation={[pitch, yaw, 0]} scale={family ? 0.87 : 1}>
    {Array.from({length: 9}, (_, i) => {
      const row = Math.floor(i / 3), col = i % 3;
      return <Strand key={i} y={(row - 1) * 0.84} z={(col - 1) * 0.72} color={colors[row]} phase={row*0.18 + col*0.38} progress={appearing}/>;
    })}
  </group>;
};

const Panel: React.FC<{children: React.ReactNode; start: number; end: number; alignment?: 'center'|'left'}> = ({children,start,end,alignment='left'}) => {
  const f = useCurrentFrame();
  const alpha = fade(f,start,end);
  const up = interpolate(f, [start,start+24], [32,0], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{pointerEvents:'none',display:'flex',flexDirection:'column',justifyContent:'center',padding:'100px 140px',opacity:alpha,transform:`translateY(${up}px)`,textAlign:alignment}}>{children}</AbsoluteFill>;
};

const Kicker: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{fontSize:27,fontWeight:800,letterSpacing:5,color:C.cyan,marginBottom:24}}>{children}</div>;
const Heading: React.FC<{children: React.ReactNode; size?: number}> = ({children,size=84}) => <div style={{fontSize:size,letterSpacing:-2.6,lineHeight:1.12,fontWeight:900,color:C.white,maxWidth:1550,textWrap:'balance',textShadow:'0px 8px 36px #0006'}}>{children}</div>;
const Sub: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{fontSize:35,lineHeight:1.4,color:C.dim,maxWidth:1250,marginTop:32}}>{children}</div>;

const TextileSwatches: React.FC = () => {
  const f = useCurrentFrame();
  const groups = [
    {name:'COTTON',sub:'THẤM HÚT',color:'#F0E9D9',pattern:'repeating-linear-gradient(4deg,#e1d7c1 0px,#fff7e7 5px,#ddd1ba 7px,#f0e9d9 12px)'},
    {name:'LEN',sub:'GIỮ ẤM',color:'#CB9D63',pattern:'repeating-linear-gradient(30deg,#DDBE8B 0px,#AA744D 5px,#F4D3A0 12px,#AD764D 15px)'},
    {name:'NYLON',sub:'BỀN, ÍT THẤM NƯỚC',color:'#3EC2D7',pattern:'repeating-linear-gradient(90deg,#1E839B 0px,#56E8E0 3px,#147F95 5px,#2FB9CA 9px)'}
  ];
  return <div style={{display:'flex',gap:30,marginTop:50}}>
    {groups.map((g,i)=>{
      const s = interpolate(f,[i*12,24+i*12],[0.82,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
      return <div key={g.name} style={{height:240,width:350,border:'1px solid #68C7CF55',borderRadius:24,overflow:'hidden',background:'#113943',transform:`scale(${s})`,boxShadow:'0 20px 80px #0005'}}>
        <div style={{height:155,background:g.pattern,boxShadow:'inset 0 0 50px #0003'}} />
        <div style={{padding:'14px 22px',display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
          <span style={{color:C.white,fontSize:28,fontWeight:900}}>{g.name}</span>
          <span style={{color:C.dim,fontSize:13,fontWeight:700}}>{g.sub}</span>
        </div>
      </div>;
    })}
  </div>;
};

export const PolymerExplainer: React.FC = () => {
  const f = useCurrentFrame();
  const {width,height} = useVideoConfig();
  const modelAlpha = fade(f,90,420);
  return <AbsoluteFill style={{background:C.bg,overflow:'hidden',fontFamily:'Arial, sans-serif'}}>
    <AbsoluteFill style={{background:'radial-gradient(circle at 65% 55%, #0A5E6A 0%, #0D323F 40%, #051923 82%)'}}/>
    <AbsoluteFill style={{backgroundImage:'linear-gradient(#B9FCFF09 1px,transparent 1px),linear-gradient(90deg,#B9FCFF09 1px,transparent 1px)',backgroundSize:'90px 90px'}}/>
    <div style={{position:'absolute',top:60,left:140,fontSize:20,fontWeight:800,letterSpacing:4,color:C.cyan}}>VẬT LIỆU POLYMER <span style={{color:C.dim}}> / III. TƠ</span></div>
    <div style={{position:'absolute',bottom:50,left:140,fontSize:18,color:'#85ABB2'}}>MÔ PHỎNG KHÁI NIỆM • KHÔNG THEO TỈ LỆ CẤU TRÚC PHÂN TỬ</div>
    <div style={{position:'absolute',bottom:46,right:140,fontSize:18,color:'#85ABB2'}}>{Math.min(18,Math.floor(f/30)+1).toString().padStart(2,'0')} / 18s</div>

    <Panel start={0} end={90}>
      <Kicker>01 / CÂU HỎI MỞ ĐẦU</Kicker>
      <Heading size={75}>CÙNG LÀ SỢI VẢI.{ '\n'}<span style={{color:C.cyan}}>SAO TÍNH CHẤT KHÁC NHAU?</span></Heading>
      <TextileSwatches/>
    </Panel>

    {f>=88 && f<422 && <AbsoluteFill style={{opacity:modelAlpha}}>
      <ThreeCanvas width={width} height={height} camera={{fov:38,position:[0,0,17]}} style={{backgroundColor:'transparent'}}>
        <ambientLight intensity={1.05}/>
        <directionalLight position={[-5,8,10]} intensity={2.1} color="#e3ffff"/>
        <pointLight position={[7,-3,5]} intensity={45} color="#55cbd4" distance={40}/>
        <PolymerStructure/>
      </ThreeCanvas>
    </AbsoluteFill>}
    <Panel start={90} end={270}>
      <div style={{alignSelf:'flex-start',background:'#061A23CB',padding:'22px 30px',borderLeft:`6px solid ${C.cyan}`,borderRadius:7,marginTop:600,maxWidth:1400}}>
        <Kicker>02 / PHÓNG ĐẠI VÀO MỘT SỢI TƠ</Kicker>
        <Heading size={60}>BÊN TRONG: NHỮNG CHUỖI POLYMER</Heading>
        <Sub>Các mạch dài có xu hướng định hướng theo trục sợi.</Sub>
      </div>
    </Panel>
    <Panel start={270} end={420}>
      <div style={{alignSelf:'flex-start',background:'#061A23D9',padding:'22px 30px',borderLeft:`6px solid ${C.gold}`,borderRadius:7,marginTop:600,maxWidth:1450}}>
        <Kicker>03 / NGUỒN GỐC VÀ CẤU TẠO</Kicker>
        <Heading size={60}>KHÁC POLYMER → KHÁC TÍNH CHẤT</Heading>
        <Sub><span style={{color:C.cyan}}>Cellulose</span>  ·  <span style={{color:C.gold}}>Protein</span>  ·  <span style={{color:C.purple}}>Polyamide</span></Sub>
      </div>
    </Panel>
    <Panel start={420} end={540} alignment="center">
      <Kicker>04 / TRỞ LẠI VỚI THỰC TẾ</Kicker>
      <Heading size={84}>VẬY VÌ SAO ÁO COTTON THẤM HÚT, CÒN NYLON THƯỜNG NHANH KHÔ?</Heading>
      <Sub>Hãy cùng giải mã cấu trúc, tính chất và ứng dụng của các loại tơ.</Sub>
    </Panel>
  </AbsoluteFill>;
};
