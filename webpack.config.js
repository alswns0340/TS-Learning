const path = require('path'); 
module.exports = { 

entry: { 
bundle: './src/index.ts' 
  }, 

output: { 
path: path.join(__dirname, 'dist'), 
filename: '[name].js' 
  }, 

resolve: {  
extensions: ['.ts', '.js'] 
  }, 
devServer: { 
  static: { 
  directory: path.join(__dirname, "dist"), 
      }, 
  compress: true, 
  port: 9000, 
  open: true,
    }, 

module: { 
rules: [ 
      { 

test: /\.ts$/, 
loader: 'ts-loader' 
      } 
    ] 
  } 
};