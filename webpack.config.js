const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = { 

    entry: './src/index.js',
   
    output: {
        filename: 'bundle.js',
        library: 'WPLibrary',
       // libraryTarget: 'window'
        
    },



    module: {

        

        rules: [

          /*  {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }

            }, */
            
            {

                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },

    

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"

        })
    ], 

    mode: 'development'
} 