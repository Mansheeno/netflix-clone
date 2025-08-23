import axios from "axios";

// Force the browser adapter (ignores Node adapters)
axios.defaults.adapter = require('axios/lib/adapters/xhr').default;

export default axios;
