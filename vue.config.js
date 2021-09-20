module.exports={
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        
       },
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network"
            }
        }
    },
    devServer:{
        open:true,
        host: '127.0.0.1',
        port:8084,
       
      
        hotOnly: false,
        disableHostCheck: true
    }
}