(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{479:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、常规刷机步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、常规刷机步骤"}},[t._v("#")]),t._v(" 一、常规刷机步骤")]),t._v(" "),s("h3",{attrs:{id:"_1、刷入第三方recovery-twrp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、刷入第三方recovery-twrp"}},[t._v("#")]),t._v(" 1、刷入第三方Recovery - TWRP")]),t._v(" "),s("p",[t._v("步骤一、解除BL锁")]),t._v(" "),s("ol",[s("li",[t._v("打开「开发者模式」。 进入设置，点击我的设备 -> 点击全部参数 -> 一直点版本号，直到出现处于开发者模式")]),t._v(" "),s("li",[t._v("打开「USB调试」和「OEM解锁」。进入「设置 - 更多设置 - 开发者模式」。OEM解锁必须打开不然没办法刷入第三方Recovery")]),t._v(" "),s("li",[t._v("下载TWRP工具包。这里我下载的是")]),t._v(" "),s("li",[t._v("刷入第三方Recovery")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启进入 FastBoot 模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" adb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v(" bootloader\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解锁 flash （这一步一定要确保OEM解锁打开）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot flashing unlock\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查是否解锁成功。出现以下输出表示BL解锁成功")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot oem device-info\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bootloader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Verity mode: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bootloader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Device unlocked: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bootloader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Device critical unlocked: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bootloader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Charger "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" enabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bootloader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Console enabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始刷入twrp")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot flash recovery twrp.img\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启设备并进入Recovery")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v(" recovery\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("步骤二、TWRP卡刷")]),t._v(" "),s("ol",[s("li",[t._v("刷入新系统时需要四清。（一定要四清，不然会变砖！！！）")]),t._v(" "),s("li",[t._v("进入 Install 选项，找到需要安装的卡刷包，安装即可")])]),t._v(" "),s("h2",{attrs:{id:"二、mipad1刷机指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、mipad1刷机指南"}},[t._v("#")]),t._v(" 二、MIPAD1刷机指南")]),t._v(" "),s("p",[t._v("1）刷入TWRP")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入FastBoot，刷入twrp")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot flash recovery twrp-3.4.0-0-mocha.img\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("2）四清")]),t._v(" "),s("p",[t._v("进入TWRP，点击Wipe -> Advance Wipe，选中前四个，滑动开始清理旧系统")]),t._v(" "),s("p",[t._v("3）刷入分区包")]),t._v(" "),s("p",[t._v("四清完成后，回到首页，点击install，选择前面已拷贝的文件 mocha_repartition_1_2GB_RahulTheVirus.zip，并滑动刷入，刷入完成后，会自动重启")]),t._v(" "),s("p",[t._v("4）刷入tos.img")]),t._v(" "),s("p",[t._v("重启进入FastBoot，刷入tos.img")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入FastBoot，刷入twrp")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot.exe flash tos tos.img\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("刷入LineageOS系统或其他系统")])]),t._v(" "),s("p",[t._v("重启后，进入TWRP，开始安装系统，点击Install，并选中文件 lineage-16.0-20200419-UNOFFICIAL-mocha.zip，滑动开始刷机")]),t._v(" "),s("h2",{attrs:{id:"附录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),s("h3",{attrs:{id:"其他常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他常用命令"}},[t._v("#")]),t._v(" 其他常用命令")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看设备连接状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" adb devices\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时启动第三方recovery。该操作不会刷入机器中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fastboot boot recovery.img\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入Recovery，点击 advanced 开启 sideload 功能，并输入以下代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" adb sideload 刷机包名称.zip\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"lineageos-16-0-刷机步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lineageos-16-0-刷机步骤"}},[t._v("#")]),t._v(" LineageOS 16.0 刷机步骤")]),t._v(" "),s("p",[s("strong",[t._v("LineageOS 16.0")])]),t._v(" "),s("p",[s("strong",[t._v("Requirements:")])]),t._v(" "),s("ol",[s("li",[t._v("active system1")]),t._v(" "),s("li",[t._v("merged system partition")]),t._v(" "),s("li",[t._v("BRAIN, READING SKILL and presence of basic knowledge about firmware (in the absence need learn to independently)")])]),t._v(" "),s("p",[s("strong",[t._v("Instruction")])]),t._v(" "),s("ol",[s("li",[t._v("download "),s("a",{attrs:{href:"https://androidfilehost.com/?fid=11410932744536994618",target:"_blank",rel:"noopener noreferrer"}},[t._v("TosForPSCI-0.1.zip"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("unzip TosForPSCI-0.1.zip")]),t._v(" "),s("li",[t._v("download "),s("a",{attrs:{href:"https://androidfilehost.com/?fid=11410932744536994233",target:"_blank",rel:"noopener noreferrer"}},[t._v("recovery-03.11.2018"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("go to fastboot mode")]),t._v(" "),s("li",[t._v("execute command: fastboot flash tos your path to tos.img")]),t._v(" "),s("li",[t._v("execute command: fastboot flash recovery your path to recovery-03.11.2018.img")]),t._v(" "),s("li",[t._v("reboot to new recovery(u can execute fastboot reboot holding vol+ button)")]),t._v(" "),s("li",[t._v("if you are on previous LineageOS 16.0 build then you may install the ROM without wipes. If you're not, make full wipes then")]),t._v(" "),s("li",[t._v("install current LineageOS 16.0 build")]),t._v(" "),s("li",[t._v("reboot to the system")])]),t._v(" "),s("p",[s("strong",[t._v("Sources")]),t._v(" "),s("a",{attrs:{href:"https://github.com/arttttt/android_device_xiaomi_mocha",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/arttttt/SmokeR24.1-kernel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kernel"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/arttttt/proprietary_vendor_nvidia",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vendor"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Changelogs")])]),t._v(" "),s("p",[s("strong",[t._v("Broken:")])]),t._v(" "),s("p",[t._v("- Cameras")]),t._v(" "),s("p",[s("strong",[t._v("Download:")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://androidfilehost.com/?w=files&flid=302916",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROM folder"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://androidfilehost.com/?fid=4349826312261776333",target:"_blank",rel:"noopener noreferrer"}},[t._v("Last build"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("XDA:DevDB Information")]),t._v(" "),s("strong",[t._v("LineageOS 16.0, ROM for the Xiaomi Mi Pad")])]),t._v(" "),s("p",[s("strong",[t._v("Contributors")]),t._v(" "),s("a",{attrs:{href:"https://forum.xda-developers.com/member.php?u=7256367",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artemka2008"),s("OutboundLink")],1),t._v(" "),s("strong",[t._v("ROM OS Version:")]),t._v(" 9.x Pie\n"),s("strong",[t._v("ROM Kernel:")]),t._v(" Linux 3.10.x")]),t._v(" "),s("p",[s("strong",[t._v("Version Information")]),t._v(" "),s("strong",[t._v("Status:")]),t._v(" Testing")]),t._v(" "),s("p",[s("strong",[t._v("Created")]),t._v(" 2019-12-07\n"),s("strong",[t._v("Last Updated")]),t._v(" 2020-04-19")])])}),[],!1,null,null,null);e.default=n.exports}}]);