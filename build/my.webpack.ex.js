module.exports = {
	entry: {
		app: '启动时加载模块'
	},
	output: {
		path: '输出绝对路径',
		publicPath: '浏览器中被引用的URL地址',
		filename: '输出到硬盘的文件的的文件名'
	},
	resolve: {
		root: [
		// import 的 module 从这里查找
		  path.resolve(__dirname, '../src/components'),
		  path.resolve(__dirname, '../src/views')
		],
		extensions: '["","...","..."]解析模块的拓展名的数组,require，import时可以不写拓展名',
		fallback: '(如指为 node_modules)webpack没有在resolve.root 或者 resolve.modulesDirectories找到的模块的一个目录（或者目录绝对路径的数组）',
		 alias: {
		 	'a': '指定了查找import 或 require 模块的路径',
		 	'b': ''
		 }
	},
	resolveLoader: {
		fallback: '相当于 resolve,针对 loader，基本是 node_modules'
	},
	modules: {
		loaders: [//自动引用的加载器的数组
			{
				test: '',
				loader: ''
			}
		]
	}
}