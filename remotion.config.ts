import {Config} from '@remotion/cli/config';
// Required for WebGL when rendering @remotion/three in headless Chrome.
Config.setChromiumOpenGlRenderer('angle');
