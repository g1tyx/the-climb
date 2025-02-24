/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "Credits:": "鸣谢:",
    "Hidden": "隐藏",
    "Heirloom": "传家宝",
    "Item": "物品",
    "Other": "其他",
    "Etc": "其它",
    "Log": "日志",
    "Monday": "周一",
    "Tuesday": "周二",
    "Skills": "技能",
    "Start Journey": "开始旅程",
    "Type": "类型",
    "Tooltip": "工具提示",
    "Use": "使用",
    "World Navigation": "世界导航",
    "Enchant": "附魔",
    "Equipment": "装备",
    "Equip": "装备",
    "Combat": "战斗",
    "Action Window": "行动窗口",
    "(Icons)": "(图标)",
    "(Battlers)": "(战士)",
    ". This happens and is explained in full after finishing floor 1 of the tower. It is recommended not to protract the first run before getting there and fully understanding this mechanic.": "．这是在完成塔的第一层后发生的。在完全理解这一机制之前，建议不要延长第一次运行时间。",
    "Yes, filling your belly would be a good start.": "是的，填饱肚子是个好的开始。",
    "Welcome to the Climb, if you see/hear this, you are using a screenreader. This game is unfortunately not made with people like you in mind, I am sorry. However, I did do some tweaks to at least enable you to play somewhat. The most important thing is knowing that \"mouse over\" is extremely important in this game. Crucial information is displayed when you \"mouse over\" things, like, but not limited to, inventory. If you find a \"clickable\", it most likely has a tooltip. There is a tooltip element that exists near the bottom of the page, it is marked by a heading level 2. This element is updated whenever you mouse over something that does have a tooltip. Once again I am sorry for not being able to spend more time making the game more accessible, but I do hope you have fun with the limited functionality available. If you think there are some minor tweaks that would make the experience more enjoyable to play, let me know on discord.": "欢迎来到攀登，如果你看到/听到这个，你正在使用屏幕阅读器。不幸的是，这个游戏并没有考虑到像你这样的人，我很抱歉。然而，我确实做了一些调整，至少让你能玩一些。最重要的是要知道“鼠标悬停”在这个游戏中是非常重要的。当你“鼠标移到”物品上时，关键信息就会显示出来，比如，但不限于，库存。如果你发现一个“可点击的”，它很可能有一个工具提示。在页面底部附近有一个工具提示元素，它被标记为标题级别2。当您将鼠标移到有工具提示的东西上时，此元素就会更新。我再次为不能花更多时间让游戏更容易上手而感到抱歉，但我希望你能在有限的功能中玩得开心。如果你认为有一些小的调整可以让游戏体验更愉快，请在Discord上告诉我。",
    "The game was not designed for small devices such as mobile phones. Text may be hard to read and hover tooltips hard to access. This includes important gameplay explanations, lore and questlines. It is strongly recommended to play the game on a desktop or a laptop instead..": "这款游戏不是为手机等小型设备设计的。文本可能难以阅读，悬停工具提示难以访问。这包括重要的游戏玩法解释，传说和任务线。强烈建议在台式机或笔记本电脑上玩此游戏。",
    "A long journey lies ahead.": "前面还有很长的路要走。",
    "Aekashics": "美学",
    "And living among these brave heroes is you, a nobody. A nobody with a dream - to conquer the tower. Or at least earn enough to fill your belly.": "而你，一个无名小卒，生活在这些勇敢的英雄之中。一个没有梦想的无名小卒——征服高塔。或者至少赚到足够填饱肚子的钱。",
    "And then you should probably check around the Training Grounds in the City.": "然后你应该去城里的训练场看看。",
    "Brought to you by Motas.": "由Motas为您带来。",
    "Clockwork Raven": "发条乌鸦",
    "Everyone who provided feedback and suggestions": "所有提供反馈和建议的人",
    "finalbossblues": "finalbossblues",
    "Full of monster, but also treasures, it attracted countless adventurers, and a bustling city was built around it.": "充满了怪物，也有宝藏，它吸引了无数的冒险家，并在它周围建立了一个繁华的城市。",
    "Information Window": "信息窗口",
    "Inventory": "库存",
    "It has been 500 years since the Tower appeared.": "自从塔出现以来，已经有500年了。",
    "Join us on discord!": "加入我们的discord吧！",
    "Journal": "日记",
    "MDEF": "魔法防御",
    "Neutral": "中立",
    "Pipoya": "Pipoya",
    "Status": "状态",
    "Thank you for playing!": "谢谢你的参与！",
    "The Beginning": "开始",
    "The tower pierces through the heavens, its top nowhere to be seen.": "这座塔高耸入云，看不到塔顶。",
    "There are new quests available in the Adventurers' Guild.": "在冒险家公会中有新的任务。",
    "This game features a prestige mechanic, meaning it resets parts of your progress": "这款游戏的特色是声望机制，这意味着它会重置你的部分进度",
    "This is a demo with limited content.": "这是一个内容有限的演示。",
    "Unremarkable": "平平无奇",
    "Vitals": "生命值",
    " Stats": "属性",
    ": Press shift to show controls overlay, this allows you to set item as favorite, hide it into the hidden tab, delete it and later in the game - feed it. Use right click on inventory filters to use them as toggles instead of tabs.": "：按shift显示控件覆盖，这可以让你设置物品为收藏，隐藏到隐藏标签，删除它，后来在游戏中提供它。在库存过滤器上使用右键将它们用作开关而不是选项卡。",
    ": Some actions will remove equipment from your inventory (completing quests, feeding). These actions only count and remove clean equipment. An equipment is clean when it has no experience, no rank, no socketed enchant (or card) and is not an heirloom (except runes), equipped, favorite or hidden. It's basically a new piece of equipment you have not interacted with.": "：一些动作会从你的库存中移除装备（完成任务，喂养）。这些动作只计算和移除干净的装备。当一个装备没有经验，没有等级，没有嵌套的附魔（或卡牌），不是传家宝（除了符文），装备，最爱或隐藏时，它就是干净的。它基本上是一个你没有与之互动的新装备。",
    "Pause": "暂停",
    "Pauses the game.": "暂停游戏。",
    "Intelligence": "智力",
    "Dark Mode": "深色模式",
    "Removes": "移除",
    "Quests": "任务",
    "Poison": "药水",
    "Save Export": "导出存档",
    "Strength": "力量",
    "Updates": "更新",
    "Weapon Element": "武器元素",
    "Travelers": "旅行者",
    "Your progress is saved.": "您的游戏进度已保存。",
    "Burning": "燃烧",
    "Bleeding": "流血",
    "Bestiary": "图鉴",
    "Bandage": "绷带",
    "Armor Element": "护甲元素",
    "About": "关于",
    "Clean items": "清理物品",
    ": Pressing 0-9 while hovering over an item allows you to set a hotkey. Using the hotkey uses the item. You can also hold the hotkey for rapid usage.": "：当鼠标悬停在一个项目上时按0-9键可以设置一个热键。使用热键可以使用该项。也可以按住热键快速使用。",
    "A jug of enchanted water, effective at dousing basic magical fire.": "一壶施了魔法的水，能有效地扑灭基本的魔法火焰。",
    "A piece of dry bread. Somewhat filling, no risk of food poisoning, cheap. Nothing to complain about, right? Right?": "一块干面包。有点饱腹感，没有食物中毒的风险，便宜。没什么好抱怨的，对吧？对吧?",
    "Alternatively, you can press and hold the shift key.": "或者，您也可以按住shift键。",
    "Antidote": "解药",
    "Check out what's new!": "看看有什么新消息！",
    "Click this icon to remove the golden highlight.": "单击此图标以移除金色高光。",
    "Click this to export your save into a text file.": "单击此按钮将您的保存导出为文本文件。",
    "Click to toggle.": "单击进行切换。",
    "Cloth bandage, effective at stopping bleeding.": "布绷带，止血效果好。",
    "Consumable / Food": "消耗品/食品",
    "Consumable / Medicine": "消耗品/药品",
    "Controls": "控制",
    "Damage Reduction": "伤害减免",
    "Dexterity": "灵巧",
    "Dims the background.": "调暗背景。",
    "Dry Bread": "干面包",
    "Enchanted Water": "附魔之水",
    "Equipment": "装备",
    "HP Regeneration": "生命回复",
    "Increase magical damage dealt.": "增加魔法伤害。",
    "Increase physical damage dealt.": "增加物理伤害。",
    "Increases critical chance.": "增加暴击几率。",
    "Inventory Guide": "库存指南",
    "Learned Diagrams": "学习图表",
    "Magical Defense": "魔法防御",
    "Mixture of medicinal ingredients, effective at stopping most poisons.": "混合的药物成分，有效地阻止大多数毒药。",
    "Normal Speed": "正常速度",
    "Opens the about overlay.": "打开关于弹出层。",
    "Opens the inventory controls. Click again to close.": "打开库存控制。再次单击关闭。",
    "Opens the settings overlay.": "打开设置弹出层。",
    "Opens the updates overlay.": "打开更新弹出层。",
    "Reduces all damage received (flat amount).": "减少所有伤害（固定数量）。",
    "Reduces magical damage received (percentage).": "减少魔法伤害（百分比）。",
    "Runs the game at normal speed.": "以正常速度运行游戏。",
    "The element of your armor. Affects damage received based on enemy weapon element.": "你盔甲的元素。根据敌人的武器元素影响受到的伤害。",
    "The element of your weapon. Affects damage dealt based on enemy armor element.": "你武器的元素。影响对敌方护甲造成的伤害。",
    "Reset Game": "重置游戏",
    "Drinks Consumed:": "消耗的饮料:",
    "Death Count:": "死亡次数:",
    "Cards Obtained:": "获得的卡片:",
    "Water Killed:": "击杀的水:",
    "Formless Killed:": "击杀的无形怪:",
    "Enemies Killed:": "击杀的敌人:",
    "Construct Killed:": "击杀的结构体:",
    "Bosses Killed:": "击杀的Boss:",
    "Burning Damage Dealt:": "造成的燃烧伤害:",
    "Bleeding Damage Dealt:": "造成的流血伤害:",
    "Bleeding Damage Received:": "受到的流血伤害:",
    "Burning Resistance": "火焰抵抗",
    "Combat Mastery Exp": "战斗精通经验值",
    "Alchemy Exp": "炼金术经验值",
    "Blacksmithing Exp": "锻造经验值",
    "Trading Exp": "交易经验值",
    "Enchanting Exp": "附魔经验值",
    "Chronomancy Exp": "时卜术经验值",
    "Tailoring Exp": "裁缝经验值",
    "Cooking Exp": "烹饪经验值",
    "Water Affinity Exp": "水亲和力经验值",
    "Date and Time": "日期和时间",
    "Defense": "防御",
    "discord link": "Discord链接",
    "Discount": "折扣",
    "Discount now applies on workstation purchases": "折扣现在适用于购买工作站",
    "Damage Received": "受到的伤害",
    "Damage Dealt": "造成的伤害",
    "Crit Power": "暴击伤害",
    "Cooking": "烹饪",
    "Drop Rate": "掉落率",
    "Enchanting": "附魔",
    "Elements Killed": "击杀的元素",
    "Generate save": "生成存档",
    "Generate Save": "生成存档",
    "General": "常规",
    "Spells Cast:": "施放的法术:",
    "Tailoring": "裁缝",
    "Beast": "野兽",
    "Construct": "结构体",
    "Insect": "昆虫",
    "Humanoid": "人形",
    "Formless": "无形",
    "Plant": "植物",
    "Earth": "地",
    "Water": "水",
    "Wind": "风",
    "Fire": "火",
    "Holy": "神圣",
    "Neutral": "自然",
    "Shadow": "暗影",
    "Upload save": "上传存档",
    "Upload Save": "上传存档",
    "Unlocked": "已解锁",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "HP:": "生命值:",
    "MP:": "法力值:",
    "DEF": "防御",
    "DEX": "灵巧",
    "STR": "力量",
    "INT": "智力",
    "QTY": "数量",
    "DR": "伤害减免",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "ABC": "ABC",
    "Monday": "周一",
    "Tuesday": "周二",
    "Wednesday": "周三",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Player": "玩家",
    "Critical chance: ": "暴击率: ",
    "Value: ": "值: ",
    " Prof.": "教授",
    "Increases the damage you deal against enemies of the ": "增加你对 ",
    "Increases the damage you deal against enemies with ": "增加你对 ",
    "Increases the damage you deal with ": "增加你对 ",
    "Unlocked: ": "已解锁: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    " race. Each point equals 1% damage increase.": " 种族敌人造成的伤害。每增加1点相当于增加1%的伤害。",
    " element. Each point equals 1% damage increase.": " 元素敌人造成的伤害。每增加1点相当于增加1%的伤害。",
    " attacks. Each point equals 1% damage increase.": " 攻击敌人造成的伤害。每增加1点相当于增加1%的伤害。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+). ([\d\.,]+). ([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\(([\d\.,]+) seconds\)$/, '($1 秒)'],
    [/^Level: ([\d\.,]+) \| Exp: (.+)$/, '等级: $1 \| 经验值: $2'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);