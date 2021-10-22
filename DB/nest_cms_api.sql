/*
 Navicat Premium Data Transfer

 Source Server         : Local-MySQL
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : nest_cms_api

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 22/10/2021 11:16:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for about
-- ----------------------------
DROP TABLE IF EXISTS `about`;
CREATE TABLE `about` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` mediumtext,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `banner` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of about
-- ----------------------------
BEGIN;
INSERT INTO `about` VALUES ('47fd5dd0-d34e-41c5-9375-fbdfc21b405a', '联系我们', '<p>&nbsp;</p><figure class=\"image\"><img src=\"http://localhost:3000/uploads/31570b02b5d4cacc55c3c5a07095b1fc1634348290965.jpg\"></figure><p>Opera桌面浏览器首创了许多新功能，从而帮助用户提高上网效率，促进创新和网络开发。例如，在Opera浏览器的第一个公开发行版本里，Opera就实现了在一个窗口里同时打开多个文档——这就是普遍流行的“标签式浏览”的前身。又如，2001年Opera首创了“鼠标手势”，极大地改变了许多人网上冲浪的方式。</p><p>Opera还有很多创新是围绕着如何帮助用户提高工作效率，如浏览器内置的笔记功能，便于用户快速浏览常用网址的“快速拨号”功能，以及能同步各种浏览信息的OperaLink功能等等。在Opera即将推出的10.0版本中，又加入了可以通过压缩页面为窄带用户带来宽带浏览速度的OperaTurbo加速技术。</p><p><strong>标签式浏览</strong></p><p>标签式浏览是现代几乎所有浏览器支持的方式，在打开一个网页时新的网页会在同一个窗口内打开并在靠近窗口顶部的位置出现该网页的选项卡标签，点击这些标签就可以在不同的网页间方便切换，而不必打开一个新的浏览器窗口。</p><p><strong>快速拨号</strong></p><p>快速拨号就是可以帮助用户将自己最常访问的多个网站，依次设入“拨号面板”中，而这些网站是以缩略图形式展现出来直观明了。然后，每次启动Opera时，便可以通过这个面板，快速打开相应的网站。</p><p><strong>鼠标手势</strong></p><p>就是用鼠标做出一些动作以控制软件完成某些操作，就好比人们见面时打的手势一样。一般是按住鼠标右键，并在网页的空白处划出某种特定的轨迹，然后即可实现预先定制的前进、后退、刷新、关闭窗口等常用操作。</p><figure class=\"image\"><img src=\"http://localhost:3000/uploads/1570b02b5d4cacc55c3c5a07095b1fc71634348542377.jpg\"></figure><p><strong>OperaLink</strong></p><p>OperaLink不仅仅是一个简单的书签同步功能，用户使用它将可以共享自己桌面浏览器和手机浏览器的所有书签、快速拨号、笔记和其它一些个性化设置，让用户时刻享受简单、轻松、便捷的互联网生活。</p><p><strong>Opera Turbo</strong></p><p>Opera Turbo技术源于Opera大力推行的“One Web”理念，它也标志Opera帮助人们随时随地更轻松快速上网的构想向前迈进了一大步。Opera正在通过不断开发新技术创建更好的网络体验，并逐渐打破阻碍，实现全球互联网的一体化进程。Opera Turbo是存在于Opera 10和Opera Mobile中独创的压缩技术。Opera Turbo在窄带环境下网页浏览速度比同类浏览器快8倍。Opera Turbo功能始于2009年9月1日的Opera 10，但Opera的网页压缩技术最早在Opera mini中已经应用。</p><p><strong>Opera unite</strong></p><p><a href=\"https://baike.baidu.com/item/Opera%20Unite\">Opera Unite</a>是一种全新的在线协作技术，它基于Opera浏览器中简单而精密的服务器程序实现共享数据和服务等功能。Opera Unite颠覆了互联网传统的“客户端─服务器”计算模式，使得每一台电脑既成为客户端也成为服务器，电脑之间可以直接通过网络进行点对点互动和信息共享，再也不需要通过第三方服务器中转。而且，Opera Unite为我们提供了文件共享、媒体播放器、相片册、聊天室、冰箱门（虚拟出来的一个冰箱门，访客和用户自己可以随意在冰箱门上贴便条）等服务，甚至能够将用户的电脑扮演成网络服务器。Opera Unite提出了一种Mashup“云计算”和“点对点（P2P）”概念的新的计算模式。它的优势就在于借助个人电脑平台来分销高昂的云计算服务器开支以及服务器运行时的压力等；它的诞生，就如同AJAX一样——源自传统，却是颠覆性的。Unite 扩展始现于Opera 10.10 正式版，Opera 12终止服务。</p>', 1, '2021-10-15 17:03:31', '2021-10-16 09:50:09', 'public/uploads/b02b5d4cacc55c3c5a07095b1fc796261634348910770.jpg', 'contact-us', '快速拨号就是可以帮助用户将自己最常访问的多个网站，依次设入“拨号面板”中，而这些网站是以缩略图形式展现出来直观明了。然后，每次启动Opera时，便可以通过这个面板，快速打开相应的网站。', 'contact');
INSERT INTO `about` VALUES ('4aa124a1-35f3-4c05-a5ce-46b9a581cf48', '关于我们', '<figure class=\"image\"><img src=\"http://localhost:3000/uploads/70b02b5d4cacc55c3c5a07095b1fc7961634348703334.jpg\"></figure><p>Opera浏览器，是一款挪威Opera Software ASA公司制作的支持多页面标签式浏览的网络浏览器，是跨平台浏览器可以在Windows、Mac和Linux三个操作系统平台上运行。Opera浏览器创始于1995年4月。2019.1.31日最新版本58.0(58.0.3135.53)。</p><p>Opera浏览器因为它的快速、小巧和比其他浏览器更佳的标准兼容性获得了国际上的最终用户和业界媒体的承认，并在网上受到很多人的推崇。OperaSoftware开发的Opera浏览器是一款适用于各种平台、操作系统和嵌入式网络产品的高品质、多平台产品，opera浏览器不同于其他浏览器的特点有：</p><p><strong>Opera支持多种操作系统，</strong>如<a href=\"https://baike.baidu.com/item/Windows\">Windows</a>、<a href=\"https://baike.baidu.com/item/Linux\">Linux</a>、<a href=\"https://baike.baidu.com/item/Mac/173\">Mac</a>、<a href=\"https://baike.baidu.com/item/FreeBSD\">FreeBSD</a>、<a href=\"https://baike.baidu.com/item/Solaris/830904\">Solaris</a>、<a href=\"https://baike.baidu.com/item/BeOS\">BeOS</a>、<a href=\"https://baike.baidu.com/item/OS%2F2\">OS/2</a>、<a href=\"https://baike.baidu.com/item/QNX\">QNX</a>等，此外，Opera还有手机用的版本，如在WindowsMobile和Android手机上安装的OperaMobile和在JAVA上的OperaMini，早在2006年更与<a href=\"https://baike.baidu.com/item/Nintendo/6732440\">Nintendo</a>签下合约，提供NDS及<a href=\"https://baike.baidu.com/item/Wii\">Wii</a>游乐器Opera浏览器软件；也支持多语言，包括简体中文和繁体中文。</p><p>Opera还提供很多方便的特性，包括网络同步，Wand密码管理、会话管理、鼠标手势、键盘快捷键、内置搜索引擎、智能弹出式广告拦截、网址的过滤、浏览器识别伪装和超过400种，可以方便下载更换的皮肤，界面也可以在定制模式下通过拖放随意更改。下载一个大约10M的扩展以后，它甚至可以让你用语音控制以及阅读网页（英文）。而以上的这些，包括右键菜单都是可以由用户自定义的。</p><p>Opera支持包括SSL2/3以及<a href=\"https://baike.baidu.com/item/TLS\">TLS</a>在内的各种安全协议，支持256位加密，可以抵御恶意代码攻击、钓鱼攻击等网络攻击。而其网页渲染速度也可能是当今速度最快的。它支持<a href=\"https://baike.baidu.com/item/W3C\">W3C</a>标准，此外它还可以作者模式和用户模式让有经验的使用者控制浏览网页的结构和字体等。</p><p>Opera桌面浏览器首创了许多新功能，从而帮助用户提高上网效率，促进创新和网络开发。例如，在Opera浏览器的第一个公开发行版本里，Opera就实现了在一个窗口里同时打开多个文档——这就是普遍流行的“标签式浏览”的前身。又如，2001年Opera首创了“鼠标手势”，极大地改变了许多人网上冲浪的方式。</p><p>Opera还有很多创新是围绕着如何帮助用户提高工作效率，如浏览器内置的笔记功能，便于用户快速浏览常用网址的“快速拨号”功能，以及能同步各种浏览信息的OperaLink功能等等。在Opera即将推出的10.0版本中，又加入了可以通过压缩页面为窄带用户带来宽带浏览速度的OperaTurbo加速技术。</p><p><strong>标签式浏览</strong></p><p>标签式浏览是现代几乎所有浏览器支持的方式，在打开一个网页时新的网页会在同一个窗口内打开并在靠近窗口顶部的位置出现该网页的选项卡标签，点击这些标签就可以在不同的网页间方便切换，而不必打开一个新的浏览器窗口。</p><p><strong>快速拨号</strong></p><p>快速拨号就是可以帮助用户将自己最常访问的多个网站，依次设入“拨号面板”中，而这些网站是以缩略图形式展现出来直观明了。然后，每次启动Opera时，便可以通过这个面板，快速打开相应的网站。</p>', 1, '2021-10-15 16:48:09', '2021-10-16 09:47:31', 'public/uploads/0b02b5d4cacc55c3c5a07095b1fc79621634348848700.jpg', 'about-us', '相比其他浏览器，我们简化了浏览处理功能，搭配内置广告拦截功能，实现更快速的网页加载体验。', 'about');
COMMIT;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `intro` mediumtext,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of banner
-- ----------------------------
BEGIN;
INSERT INTO `banner` VALUES ('04588ec1-cc83-4979-8fe8-6d155e757f8e', '随时随地浏览精彩', 'public/uploads/7e9242cd0c70f96299ca70a5e93d24331634374112409.jpg', 'Opera 的移动浏览器和应用程序速度快、功能丰富，能为 Android 和 iOS 同时提供最佳的网络体验。', 1, '2021-10-16 16:48:36', '2021-10-16 16:53:12', '');
INSERT INTO `banner` VALUES ('8f0ceda0-0d24-44bf-97d1-9a27ef15910d', '内置广告拦截功能，助您加快浏览速度', 'public/uploads/e9242cd0c70f96299ca70a5e93d2433c1634374414715.jpg', '内置广告拦截功能让您摆脱无休止的在线广告的干扰。它还能屏蔽挖矿等恶意软件，并帮助加快页面加载，就像一个浏览器“忍者”。', 1, '2021-10-16 16:53:42', '2021-10-16 16:53:42', '');
COMMIT;

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `intro` mediumtext,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of home
-- ----------------------------
BEGIN;
INSERT INTO `home` VALUES ('340d8ff4-3ecc-4c47-84d9-c447be5500c8', '暗色和亮色模式让您彰显自我风格', 'public/uploads/42cd0c70f96299ca70a5e93d2433c9471634375060431.jpg', '可通过设置暗色和亮色主题、键盘快捷键、墙纸、扩展程序、收藏夹书签和许多其他选项，对 Opera 进行自定义设定。', 1, '2021-10-16 17:04:27', '2021-10-16 17:32:19');
INSERT INTO `home` VALUES ('5a59a16b-2b5d-4de8-9a71-345d2bf3e0e2', '内置广告拦截功能，助您加快浏览速度', 'public/uploads/242cd0c70f96299ca70a5e93d2433c941634375041337.jpg', '内置广告拦截功能让您摆脱无休止的在线广告的干扰。它还能屏蔽挖矿等恶意软件，并帮助加快页面加载，就像一个浏览器“忍者”。', 1, '2021-10-16 17:04:07', '2021-10-16 17:31:59');
INSERT INTO `home` VALUES ('f1637a08-f750-4438-90fe-8253cb2e303a', '内置 Messenger 有助于随时联络', 'public/uploads/9242cd0c70f96299ca70a5e93d2433c91634374944719.jpg', '使用浏览器侧边栏中的内置 Messenger，聊天、浏览一举兼得，无需一直在标签页和应用程序之间切换。', 1, '2021-10-16 17:02:27', '2021-10-16 17:32:31');
COMMIT;

-- ----------------------------
-- Table structure for product-categories
-- ----------------------------
DROP TABLE IF EXISTS `product-categories`;
CREATE TABLE `product-categories` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `route` varchar(255) DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of product-categories
-- ----------------------------
BEGIN;
INSERT INTO `product-categories` VALUES ('0cfabc98-ad1c-481f-b16b-309589a83a98', '男装', 1, '2021-10-16 14:18:46', '2021-10-16 14:18:46', '', '');
INSERT INTO `product-categories` VALUES ('2b2e4dc1-d610-4f3a-baf2-b69f89bb7d63', '母婴', 1, '2021-10-16 14:18:22', '2021-10-16 14:18:22', '', '');
INSERT INTO `product-categories` VALUES ('4ad1870a-ac5d-4a5c-b96f-83db8a93106f', '玩具', 1, '2021-10-16 14:18:32', '2021-10-16 14:18:32', '', '');
INSERT INTO `product-categories` VALUES ('55e47fb5-edd1-442e-a4f1-09749cc90a9a', '家居', 1, '2021-10-16 14:17:49', '2021-10-16 14:17:49', '', '');
INSERT INTO `product-categories` VALUES ('660b8253-17d6-444b-aa11-83f96a394f99', '女鞋', 1, '2021-10-16 14:17:58', '2021-10-16 14:17:58', '', '');
INSERT INTO `product-categories` VALUES ('aa842a84-1314-44c1-80fc-9b54b21dee54', '箱包', 1, '2021-10-16 14:18:11', '2021-10-16 14:18:11', '', '');
INSERT INTO `product-categories` VALUES ('b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', '运动户外', 1, '2021-10-16 14:18:52', '2021-10-16 15:57:04', 'huwai', '运动户外大全列表');
INSERT INTO `product-categories` VALUES ('d15897c0-1288-4165-a633-8f766ff36729', '男鞋', 1, '2021-10-16 14:18:05', '2021-10-16 14:18:05', '', '');
INSERT INTO `product-categories` VALUES ('d7bddc18-4640-45bd-9511-914e5a429091', '童装', 1, '2021-10-16 14:18:26', '2021-10-16 14:18:26', '', '');
INSERT INTO `product-categories` VALUES ('e66b3aa7-c4af-4525-9805-19b15db3224d', '女装', 1, '2021-10-16 14:16:35', '2021-10-16 14:17:33', '', '');
INSERT INTO `product-categories` VALUES ('edfee186-526c-4909-b152-ede4e99a15b1', '内衣', 1, '2021-10-16 14:17:42', '2021-10-16 14:17:42', '', '');
COMMIT;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `intro` mediumtext,
  `content` mediumtext NOT NULL,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `route` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `recommend` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES ('24a74ec6-410e-4441-b696-1d38e27b612a', 'Hype 1.3 是 Opera 内置聊天服务的新版本，现在可以非常轻松地找到新朋友', 'public/uploads/a537e611196aeba85534188b1e88cb5d1634777807442.jpg', '', '<p>今天，Opera 推出了新版本的聊天服务 Hype。 Hype 1.3 的主要亮点是 Find new Friends 功能，它允许用户在应用程序内轻松结识新朋友。</p><p>&nbsp;</p><p>Hype 是第一个内置于移动浏览器 Opera Mini 中的非洲风格聊天服务，允许用户轻松设置帐户并立即开始使用安全的端到端加密进行聊天。这意味着用户可以在一个应用程序中浏览网页、与朋友聊天、与其他 Hype 用户分享自己创建的模因、贴纸和 GIF，并找到具有相同兴趣的人。 Hype 目前可用，并在非洲英语国家迅速流行，激活次数超过 240 万次。</p><p>&nbsp;</p><p>炒作1.3：一键结识有趣的人</p><p>&nbsp;</p><p>&nbsp;</p><p>应 Hype 用户的要求，我们推出了“查找新朋友”功能。现在，对结交新朋友和寻找有趣的人聊天感兴趣的 Hype 用户只需按一下按钮即可。</p><p>&nbsp;</p><p>如果您在周五晚上感到无聊或厌倦了总是与同一个人交谈，那么此功能将成为您的生命线。您所要做的就是打开您的 Hype 帐户，然后单击“立即与其他 Hype 用户聊天”。你将与​​一个随机的人匹配，他点击了同样的东西，也愿意结交新朋友。这就是兴奋的地方！除了他们的姓名和个人资料图片之外，您不知道年龄、国籍、职业或任何其他关于您的比赛的详细信息 - 享受对话吧！</p><p>&nbsp;</p><p>匹配完成后，您可以随心所欲地聊天，但仍要保护您的隐私。只有当你们都同意在 Hype 上成为朋友时，你们才能在以后找到对方并继续对话。如果您发现比赛无趣，您可以随时结束聊天并找到新的比赛。</p><p>&nbsp;</p><p>炒作有什么特别之处？</p><p>&nbsp;</p><p>炒作的建立是因为年轻一代的互联网用户期望他们在设备上使用的应用程序能够提供更多的社交连接。通过这种集成，Opera Mini 已成为世界上第一个集成社交组件的主要浏览器，该组件可让用户与最重要的用户保持联系。</p><p>&nbsp;</p><p>Opera 一直致力于改善聊天体验。 Hype 用户可以使用链接预览、GIF 支持和独特的内置模因创建器，使与朋友的聊天更加个性化和有趣。此外，用户可以加入基于兴趣的炒作俱乐部，寻找真正属于他们的社区，与志同道合的人聊天。</p><p>&nbsp;</p><p>Hype 是第一个内置于移动浏览器中的非洲灵感聊天服务。它为用户提供了一系列贴纸，其中包括非洲艺术家创作的目前在非洲流行的日常表达。 Hype 提供的这一独特服务从其他聊天服务中脱颖而出，为非洲人提供了在聊天时更准确地表达自己的新方式。</p><p>&nbsp;</p><p>炒作帐户设置</p><p>&nbsp;</p><p>要激活 Hype 帐户，您应该拥有 Opera Mini 应用程序。通过点击 Opera Mini 浏览器底部的 Hype 徽标或通过 O 菜单设置 Hype 帐户。接下来，您需要选择您的姓名并自拍或上传个性化照片 - 它会成为您的个人资料图片，并可供其他 Hype 用户看到。完成此过程后，您可以将 Hype 与手机的联系人列表同步以开始与他人聊天。</p>', 1, '2021-10-21 08:56:50', '2021-10-21 08:56:50', '', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 0);
INSERT INTO `products` VALUES ('6169c401-9dc3-4577-b24a-4e37ea42e248', 'Opera 浏览器在 Windows 上的 Microsoft Store 中可用', 'public/uploads/907c30fdd3f4764454198e641e62f97b1634367003185.jpeg', '', '<p>Opera 浏览器在 Windows 上的 Microsoft Store 中可用</p><p>Julia Szyndzielorz 2021 年 9 月 28 日 22 条评论</p><p>&nbsp;</p><p>你好，</p><p>&nbsp;</p><p>我们带来了一些好消息：Opera 是全球数亿人的首选个人浏览器，可在 Windows 上的 Microsoft Store 中使用。这意味着 Windows 用户在选择他们喜欢的浏览器时将更容易访问和更多选择。更轻松地访问 Opera 的高级功能集，包括免费、无限制、内置的 VPN 和广告拦截器，以及侧边栏中的内置信使和社交网络，将使 Windows 用户获得真正的浏览器替代方案。</p><p>&nbsp;</p><p>将 Opera 添加到 Microsoft Store 意味着 Windows 用户将直接在其操作系统中获得浏览器，而无需在 Web 上查找。对于 Opera 来说，这代表了另一个关键的相关分发渠道和直接接触 Windows 用户的一种方式。</p><p>&nbsp;</p><p>我们非常感谢您，我们的用户，感谢您支持 Opera 并要求我们的浏览器在 Windows 的 Microsoft Store 中可用。向其他浏览器开放 Microsoft Store 是朝着更多用户选择的正确方向迈出的一步。</p><p>&nbsp;</p><p>浏览愉快！</p>', 1, '2021-10-16 14:49:01', '2021-10-21 08:48:14', '', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 0);
INSERT INTO `products` VALUES ('6d54d03e-eda2-4163-a9fd-42cc4e42a147', '十亿感谢十亿次下载！我们将继续致力于打造更好的浏览体验，迎接下一个 10 亿次下载！', 'public/uploads/537e611196aeba85534188b1e88cb5d31634777989961.jpeg', '', '<p>十亿感谢十亿次下载！</p><p>Jørgen Arnesen 2021 年 7 月 8 日 13 条评论</p><p>Opera 浏览器在 Google Play 上的下载量超过 10 亿！</p><p>&nbsp;</p><p>&nbsp;</p><p>世界上有两种浏览器。第一个是默认的，预安装在您的计算机或手机上。在您仔细考虑所有替代方案后，选择、下载和安装另一组。 Opera 很荣幸成为超过 10 亿次的首选浏览器！</p><p>&nbsp;</p><p>今天，对比默认浏览器更好的浏览器的需求不断增加，我们感到很惭愧，我们的浏览器的移动版本已从 Google Play 下载超过 10 亿次。这意味着超过 10 亿次，在他们的设备上已经有默认浏览器的人主动下载 Opera 的浏览器之一，以获得最佳的在线体验。我们认为这是对我们走在正确轨道上的深刻验证。</p><p>&nbsp;</p><p>感谢我们的所有用户，他们自己超越了默认设置，并亲自选择了适合他们的浏览器 - 谢谢。感谢您十亿次信任我们的浏览器——我们感到受宠若惊，激动不已，我们将通过继续创新和构建您不遗余力的浏览器来回报您的青睐。</p><p>&nbsp;</p><p>关于 Google Play 上的 Opera 浏览器</p><p>&nbsp;</p><p>&nbsp;</p><p>Opera 在 Google Play 上提供了多种浏览器，每种浏览器都针对不同的需求量身定制。</p><p>&nbsp;</p><p>Android 版 Opera 浏览器是流行的 Opera 桌面浏览器的移动版本。它闪电般快速，拥有免费的无限制内置 VPN，以及广告拦截器、加密钱包和许多其他通常在默认浏览器中找不到的独特功能。</p><p>&nbsp;</p><p>2008 年 11 月，Opera Mini 成为当时称为 Android 市场的第一个替代浏览器。如今，适用于 Android 的 Opera Mini 是数百万用户值得信赖的选择，尤其是在互联网访问费用昂贵的国家/地区：在数据节省方面，它的浏览器胜过所有其他浏览器，压缩率超过 90%。这使数据成本降低了 90%。</p><p>&nbsp;</p><p>Android 版 Opera Touch 于 2017 年 4 月推出，专为喜欢前沿设计的用户打造，浏览器导航移至屏幕底部，以便在配备大屏幕的智能手机上使用更方便。 Opera Touch 凭借其 UX/UI 界面赢得了红点奖，以及 IF 设计奖金奖。</p><p>&nbsp;</p><p>Opera GX Mobile 于 2021 年 6 月发布，是世界上第一款专为游戏玩家设计的移动浏览器，并考虑到他们的品味和偏好。除了其独特的外观和感觉以及标准的 Opera 浏览器功能外，Opera GX 还提供对独特的 GX Corner 的访问，其中包含来自游戏世界的最新消息和优惠。</p><p>&nbsp;</p><p>除此之外，Opera 还提供多个测试版浏览器，可在 Google Play 上下载。</p><p>&nbsp;</p><p>关于歌剧</p><p>&nbsp;</p><p>Opera 是全球领先的网络创新者，拥有数以亿计的月活跃用户，并且不断增长。基于浏览器产品超过 25 年的创新，Opera 越来越多地利用其品牌以及庞大且高度活跃的用户群来扩展其产品和业务。今天，Opera 为世界各地的用户提供一系列产品和服务，包括 PC 和移动浏览器、人工智能新闻阅读器 Opera News 以及最近推出的金融科技和分类广告应用程序。 Opera 总部位于挪威奥斯陆，并在纳斯达克证券交易所 (OPRA) 上市。</p><p>&nbsp;</p><p>再一次，我们最感谢所有使这成为可能的人！我们将继续致力于打造更好的浏览体验，迎接下一个 10 亿次下载！</p>', 1, '2021-10-21 08:59:52', '2021-10-21 09:16:05', '', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 1);
INSERT INTO `products` VALUES ('803f74ee-fbf9-486f-ad0e-d246dca31ef1', '使用 Opera GX 中的 Pinboards 以视觉方式收集、组织和分享您的想法', 'public/uploads/e6a537e611196aeba85534188b1e88cb1634777548358.jpeg', '', '<p>各位玩家好，</p><p>&nbsp;</p><p>我们知道，试图在一大堆书签、标签和笔记中跟踪您最喜欢的网站、图像、链接和内容是一项挑战。尤其是当您更愿意利用在线时间来体验最新的 MMORPG 时。</p><p>&nbsp;</p><p>但是，跟踪您最喜爱的游戏、必备外设、最喜爱的论坛或精彩的游戏内容，变得更加容易。感谢 Opera GX 中 Pinboards 的发布。</p><p>&nbsp;</p><p>&nbsp;</p><p>使用 Pinboards，您可以自由地收集、组织并以视觉方式与他人分享您的想法。创建钉板很容易。您只需将他们最喜欢的链接发布到您的虚拟插板，然后与他人分享。然后，无论使用哪种浏览器或哪种设备查看钉板，查看者都可以使用表情符号添加他们的反应，并且无需注册即可使用该功能。所有人都可以免费使用！</p><p>&nbsp;</p><p>&nbsp;</p><p>借助新的 Pinboards 功能，您可以选择直接从 Opera GX 抓取单个标签、标签组甚至屏幕抓取，以视觉格式轻松与他人共享。无论是您最喜爱的主播的链接集合、十大最佳首领击杀截图，还是即将推出的游戏的愿望清单，收集和分享您的想法从未如此简单。</p><p>&nbsp;</p><p>不确定要创建什么 Pinboards？以下是我们创建的一些示例。看看 - 让您的想法自由发挥！</p><p>&nbsp;</p><p>补丁中每条车道的最佳冠军</p><p>圣诞愿望清单</p><p>一个标签囤积者或整洁的怪胎——我们不判断</p><p>&nbsp;</p><p>如果没有偶尔出现的标签风暴，浏览器就不会是浏览器。 Opera GX 有一个有用的“在标签中搜索”功能，可让他们通过键入关键字找到特定的标签，这是对标签囤积者的温和提醒。在选项卡中搜索是使用 CTRL+空格快捷键打开的，它会搜索选项卡标题和页面内容以找到所需的选项卡。</p><p>&nbsp;</p><p>如果您已通过 Opera 帐户同步浏览器，则在选项卡中搜索还将显示在其他已连接设备上打开的选项卡。还有一个附加功能 - 如果您在其中一个选项卡中进行视频会议，一个指示器将显示它在哪个选项卡中。</p><p>&nbsp;</p><p>从现在开始，Opera 还将在标签搜索功能中指出重复的标签，这意味着您不会发现自己一遍又一遍地打开同一个标签。</p><p>&nbsp;</p><p>快乐钉板！</p>', 1, '2021-10-21 08:52:31', '2021-10-21 08:52:31', '', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 0);
INSERT INTO `products` VALUES ('85582b63-8fcc-4879-9507-fa1195d654e6', '认识世界上第一个针对 Chromebook 优化的替代浏览器', 'public/uploads/37e611196aeba85534188b1e88cb5d3b1634778171359.jpeg', '', '<p>您好，Chromebook 的粉丝们！</p><p>&nbsp;</p><p>我们很自豪地宣布，Opera 现在是世界上第一个针对 Chromebook 优化的替代浏览器。 Opera 浏览器带来了许多以前在 Chrome 操作系统平台上没有的独特功能，包括免费、无限制、无日志浏览器 VPN、广告拦截器、cookie 对话框拦截器和颜色主题。</p><figure class=\"image\"><img src=\"http://localhost:3000/uploads/2a84132f5082cd069f51d22e2dbaa64e1634799295827.jpeg\"></figure><p>&nbsp;</p><p>2020 年 Chromebook 将售出 3000 万台，预计 2021 年还将出货 4000 万台，Chrome OS 因其在工作和教育方面的便利性而成为许多人选择的重要操作系统。 Chromebook 具有用户友好的界面和触摸屏，是满足人们日常需求的绝佳设备。如果您是粉丝，那么现在是时候使用具有一组独特功能的出色替代浏览器了，我们相信您会发现它既实用又有趣。</p><p>&nbsp;</p><p>Opera 的独特功能现在可在 ChromeOS 上使用</p><p>&nbsp;</p><p>Chrome OS 上的 Opera 具有一组独特的功能，包括内置信使、免费的无限制内置 VPN、广告拦截、防止恼人的 GDPR 相关 cookie 对话框以及内置加密钱包。一切让您的浏览体验顺畅愉快。</p><p>&nbsp;</p><p>内置 WhatsApp、Telegram、Instagram、Twitter 和 Facebook Messenger</p><p>&nbsp;</p><p>如果 Opera 不能让您即时访问您最喜欢的信使，它就不是 Opera。这使其成为在 Chromebook 上提供此功能的唯一浏览器。从现在开始，您可以与朋友或同事聊天或查看您的 Instagram 或 Twitter，而无需中断浏览或拿起手机。您可能需要的所有信使都触手可及。</p><p>&nbsp;</p><p>丰富多彩的主题个性化您的浏览体验</p><p>&nbsp;</p><p>Opera 浏览器还通过在明暗模式下提供的五种颜色主题使 Chromebook 上的网络冲浪变得更加丰富多彩。</p><p>&nbsp;</p><p>如果您是狂热观察者、深夜阅读者或工作狂，您会很高兴地发现 Opera 也对眼睛友好。 Chromebook 浏览器中提供的特殊夜间模式可保护您免受扰乱睡眠模式的蓝光眩光，并保护您身边的任何人免受不必要的干扰。</p><p>&nbsp;</p><p>&nbsp;</p><p>笔记本电脑体验</p><p>为了尽可能轻松、快速和轻便地在 Chromebook 上浏览，Chromebook 版 Opera 基于 Android 版 Opera 浏览器构建，并进行了自定义优化，可在保留其所有独特功能的同时提供成熟的笔记本电脑体验。</p><p>&nbsp;</p><p>您可以继续使用鼠标和键盘，以及有用的键盘快捷键，例如用于打开新选项卡的 Ctrl + T 和用于聚焦地址栏的 Ctrl + L。 Opera for Chromebook 还可以与其他 Opera 浏览器无缝同步：Chromebook、台式电脑、Android 或 iOS 手机——我们不歧视。</p><p>&nbsp;</p><p>您可以使用 Flow 功能同步它们，只需扫描 QR 码，从而建立“Flow”，即您与自己的个人端到端加密聊天。使用 Flow，您可以共享笔记、图像、文件和链接，并立即在您的任何设备上通过 Opera 访问它们。</p><p>&nbsp;</p><p>数百万人的首选浏览器</p><p>此版本完善了 Opera 生态系统，使 Opera 可用于所有主要操作系统：Windows、Mac、Linux、Android、iOS 和现在的 Chrome OS。 Opera 浏览器是全球数百万人的首选浏览器。</p><p>&nbsp;</p><p>立即在您的 Chromebook 上试用 Opera！</p><p>&nbsp;</p><p>我们希望您喜欢这个新版本。直到下一次，愉快的浏览！</p>', 1, '2021-10-21 09:03:08', '2021-10-21 15:02:37', 'optimized-for-chromebooks', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 1);
INSERT INTO `products` VALUES ('cf72a416-ae7d-4ac7-8055-a75c5baa66d8', 'Opera 80 稳定版', 'public/uploads/1907c30fdd3f4764454198e641e62f971634366912351.jpg', '', '<p>Opera 80 稳定版</p><p>&nbsp;Kornelia Mielczarczyk 2021 年 10 月 5 日 92 条评论</p><p>你好歌剧迷。</p><p>&nbsp;</p><p>我们很高兴地通知 Opera 80 到达稳定分支！</p><p>&nbsp;</p><p>&nbsp;</p><p>此版本包含阅读器模式选项，可作为地址栏中的书本图标使用。 您可以根据需要打开和关闭此模式，使网页更干净、更易于阅读。</p><p>&nbsp;</p><p>Opera 80 基于 Chromium 94（准确地说是这个版本的 94.0.4606.61 ;)）。 更改日志中提供了所有更改。</p><p>&nbsp;</p><p>注意：此版本还包含针对 CVE-2021-37975、CVE-2021-37976 和 CVE-2021-37974 的修复，这些修复最初包含在 Chromium 版本 94.0.4606.71 中。</p><p>&nbsp;</p><p>浏览愉快！</p><p>&nbsp;</p><p>安装链接：</p><p>&nbsp;</p><p>适用于 Windows 的 Opera 稳定版</p><p>适用于 macOS 的 Opera 稳定版</p><p>适用于 Linux 的 Opera Stable – deb 包</p><p>适用于 Linux 的 Opera Stable – RPM 包</p><p>适用于 Linux 的 Opera Stable – snap 包</p>', 1, '2021-10-16 14:48:35', '2021-10-21 09:15:36', '', 'd7bddc18-4640-45bd-9511-914e5a429091', 1);
INSERT INTO `products` VALUES ('ec50c1c2-1d54-4539-a93d-09494f38f20e', '带有全新设计菜单的 Android 65 版 Opera 来了！', 'public/uploads/6a537e611196aeba85534188b1e88cb51634777650862.jpg', '', '<p>Hi everyone!&nbsp;</p><p>Opera for Android is Opera’s flagship mobile browser, so we are constantly working on improving user-experience by adding new innovative features, adjusting it to Chromebooks and providing fixes.&nbsp;</p><p>Today we are introducing the new version of Opera for Android – our well-known personal browser of choice. In version 65, the main menu comes in a stylish new design that makes it much easier to use.</p><p><strong>Revamped main menu and My Account page&nbsp;</strong></p><figure class=\"image\"><img src=\"https://lh5.googleusercontent.com/w3TZ-yy-e8kINvikG6oYiOVqqZ8fDCMBkkWkqvSiQB_gBQ76Sa-trh_WOVW1oRTXIDgK65l32pafuP7j219WHsAAEoBUc5CF_d-x7cXAiyZFauf5S27ojavJ2ZOx6KFJPCR1ivwA=s1600\" alt=\"\"></figure><p>Our product and design teams have been working together closely to make the experience of using the new version of Opera for Android as smooth as possible. We have restructured the main menu to provide more convenient access to your personal content, preferences, account settings and services.</p><p>Swipe up or tap the profile icon and get the most important things right in front of you. On the top of the new menu you can see your profile picture, name and the email connected to your Opera account. The next layer is devoted to the well-known Opera for Android features –&nbsp;VPN, Data savings, Ad blocking and Night mode. What else? All your favorites – Flow, Crypto Wallet and many more are only one click away!&nbsp;</p><p>Accessing your Opera account as well as creating one is easier now with the dedicated screen. Click on the profile section to see the page with your personal information and details of your account, such as login options and notifications. If you don’t have an Opera account yet, you are given the option to create one. Go get one now!&nbsp;</p><p><strong>Enjoy an optimized Chromebook experience</strong></p><figure class=\"image\"><img src=\"https://lh5.googleusercontent.com/pn6MSxfu4fR_JIMHJoNORHQBlDOXo7xKKyCCho2UQGCx6wWmPYXIrIKtKYpjav7gztsLxlFF5sg-hRhYk5erXhD8KQIs7WWzDm7Lm0CvRg2ikefHf2FFHxj4NJUZD9qtvKoWSMev=s1600\" alt=\"\"></figure><p>We have been continuously working on adaptations to provide the smoothest possible experience on your Chromebook as well. Stay updated with integrated messengers, free in-built VPN, enhanced print support, and a laptop tailored UI.&nbsp;</p><h4><strong>Easier crypto transactions with FIO addresses</strong></h4><figure class=\"image\"><img src=\"https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-1024x768.jpg\" alt=\"\" srcset=\"https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-1024x768.jpg 1024w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-300x225.jpg 300w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-768x576.jpg 768w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-1536x1152.jpg 1536w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-1240x930.jpg 1240w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-620x465.jpg 620w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x-150x113.jpg 150w, https://www-static-blogs.operacdn.com/mobile/wp-content/uploads/sites/4/2021/10/FIO@2x.jpg 1600w\" sizes=\"100vw\" width=\"1024\"></figure><p>FIO Addresses are a single easily readable identifier that eliminates the need to see, or even know about, blockchain public addresses. Grab yourself an easy to remember FIO address for your crypto wallet to enable safer and more convenient transactions. Eliminate the need to worry about complicated public blockchain addresses or different blockchains.</p><h4><strong>Customize your exit button</strong></h4><figure class=\"image\"><img src=\"https://lh4.googleusercontent.com/xar4y4fQ_sXXllzckv6W7unhrbeI6L79C6OEPD7aFqbWd65g_pS7IjJqSHZjHPLCql5wgYvs3yJ3DdtALOHQACnr8gewZCfrDzR1si-A7PLrRG2ZH-3Y8yzablONu9Pmvo0Jcd6G=s1600\" alt=\"\"></figure><p>We are carefully listening to the wishes of our users. From now on take full control of your privacy with the new and highly customizable exit button. Decide exactly what data to clear, and whether the action should be instant or require confirmation.</p><p>In addition, we have made over 300 fixes in this release in order to deliver the best possible browsing experience to those who are not settling for pre-installed browsers and are choosing a personal one. Enjoy your smooth browsing experience with Opera for Android 65: <a href=\"https://play.google.com/store/apps/details?id=com.opera.browser\">https://play.google.com/store/apps/details?id=com.opera.browser</a>!&nbsp;</p>', 1, '2021-10-21 08:55:19', '2021-10-21 09:15:50', '', 'b7598bf0-0c1e-4b09-bb86-d13a5b1a195c', 1);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `roles` text,
  `intro` mediumtext,
  `status` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('56754f53-ba19-4d69-812b-34349bd0a523', 'string', '9fdcc68e701706d3c631b4efbd4b3c1ba2a04fc6', 'string', 'string', 'string', 1, '2021-10-14 15:59:51', '2021-10-14 15:59:53');
INSERT INTO `user` VALUES ('f93adf1b-4d5e-4193-b439-e3816912497f', 'admin999', 'cc7a44b5c8e0acf84b181059e1e3cec069cb7cdd', 'string', 'string', 'string', 1, '2021-10-15 16:19:34', '2021-10-15 16:19:39');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
