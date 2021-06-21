(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{457:function(s,a,e){"use strict";e.r(a);var n=e(33),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Spring Boot项目部署到docker\n")]),s._v(" "),e("ol",[e("li",[s._v("将Spring Boot项目打成jar包，拷贝到工作目录，创建dockerfile文件，用于build后面的docker镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("// 举个例子，我的工作目录为 /DockerDev， 打包后的jar为 blog-server.jar\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/DockerDev\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nblog-server.jar\ndockerfile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("编辑dockerfile")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker image for springboot file run")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VERSION 0.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: sleepyocean")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像使用java")]),s._v("\nFROM java:8\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将jar包复制到容器中的/sleepy目录下，并更名为so-blog-server.jar")]),s._v("\nCOPY blog-server.jar /sleepy/so-blog-server.jar\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对外端口")]),s._v("\nEXPOSE "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行命令 java -jar so-blog-server.jar")]),s._v("\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sleepy/so-blog-server.jar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("构建镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在工作目录下（如/DockerDev）执行镜像构建命令, 构建镜像的名称为 blogserver:0.1(blogserver 为镜像名， 0.1为镜像的tag)， 注意最后的'.'别忘了")]),s._v("\n$ docker build -t blogserver:0.1 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("启动容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看镜像")]),s._v("\n$ docker images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nblogserver               "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("                 xxxxxxxxxxx        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" minutes ago       705MB\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动创建好的镜像")]),s._v("\n$ docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v(":9999 --name blogserver --link zen_engelbart:localhost blogserver:0.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("由于要引入mysql，所以需要添加链接到另一个容器，使用--link。")]),s._v(" "),e("p",[e("code",[s._v("--link")]),s._v("： 添加链接到另一个容器，格式为： "),e("strong",[s._v("docker中启动mysql镜像的容器名称 : 需要映射的名称")])]),s._v(" "),e("p",[s._v("这里我在spring boot中配置的数据库连接："),e("code",[s._v("url: jdbc:mysql://localhost:3306/test")]),s._v("，所以我这里映射的名称为"),e("code",[s._v("localhost")])])])}),[],!1,null,null,null);a.default=r.exports}}]);