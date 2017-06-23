# MX Monitoring #
  ![MX Monitoring](icon.png)

  页面数据监控报警插件

## 用途 ##
  自己做的一个监控报警小插件，适用于运维监控、管理系统等

  适用于表格(Table)型HTML结构

  适用于Google Chrome浏览器

## 使用方法 ##
  在要监控的页面的 table 下的 tbody 上添加类名 __mx_List

    <table>
        <tbody class="__mx_List">
          ...
        </tbody>
    </table>

**注意：目前只支持 table 中有 tr 的HTML结构**

## 插件安装 ##
  1. Chrome浏览器 -> 更多工具(L) -> 扩展程序(E)

  2. 加载已解压的扩展程序... -> 选择插件目录

  3. 勾选启用复选框

## 其他 ##
  目前功能比较简单，陆续完善中...

  比如不再依赖指定结构、多个界面分别监控、详细报警类型等
