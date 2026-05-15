const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const SHENGXIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

const HOME_FENGSHUI = {
    entrance: {
        title: '大门风水',
        content: `
            <h3>大门风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>大门宜宽敞明亮，阳气充足</li>
                <li>门前宜有开阔空间，称为"明堂"</li>
                <li>大门颜色宜与宅主五行相配</li>
                <li>门向宜朝向吉方</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌大门正对电梯、楼梯</li>
                <li>忌大门正对厕所门</li>
                <li>忌大门与后门直通，形成"穿堂煞"</li>
                <li>忌门前有杂物堆积</li>
            </ul>
        `
    },
    'living-room': {
        title: '客厅风水',
        content: `
            <h3>客厅风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>客厅宜位于房屋中央位置</li>
                <li>客厅宜光线充足，通风良好</li>
                <li>沙发宜背靠实墙，有靠山</li>
                <li>可摆放绿植增加生气</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌客厅昏暗潮湿</li>
                <li>忌沙发背对大门</li>
                <li>忌客厅梁柱压顶</li>
                <li>忌摆放过多尖锐物品</li>
            </ul>
        `
    },
    bedroom: {
        title: '卧室风水',
        content: `
            <h3>卧室风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>卧室宜安静私密</li>
                <li>床头宜靠实墙</li>
                <li>卧室光线宜柔和</li>
                <li>床的位置宜远离门口</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌床头正对房门</li>
                <li>忌镜子正对床</li>
                <li>忌卧室摆放电器过多</li>
                <li>忌床下堆积杂物</li>
            </ul>
        `
    },
    kitchen: {
        title: '厨房风水',
        content: `
            <h3>厨房风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>厨房宜保持清洁干爽</li>
                <li>炉灶宜背靠实墙</li>
                <li>厨房通风良好</li>
                <li>厨具摆放整齐有序</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌炉灶正对水池（水火相冲）</li>
                <li>忌厨房正对大门</li>
                <li>忌厨房正对卧室</li>
                <li>忌炉灶上方有梁</li>
            </ul>
        `
    },
    toilet: {
        title: '卫生间风水',
        content: `
            <h3>卫生间风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>卫生间宜保持干燥清洁</li>
                <li>宜经常开窗通风</li>
                <li>可摆放绿植净化空气</li>
                <li>宜有良好的排气系统</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌卫生间正对大门</li>
                <li>忌卫生间正对厨房</li>
                <li>忌卫生间正对卧室</li>
                <li>忌卫生间位于房屋中心</li>
            </ul>
        `
    }
};

const OFFICE_FENGSHUI = {
    desk: {
        title: '办公桌风水',
        content: `
            <h3>办公桌风水宜忌</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>办公桌宜背靠实墙</li>
                <li>宜面向门口或能看到门口</li>
                <li>桌面宜整洁有序</li>
                <li>可放置文昌塔助事业</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌背对门口</li>
                <li>忌正对柱子或墙角</li>
                <li>忌桌面杂乱无章</li>
                <li>忌座位上方有梁</li>
            </ul>
        `
    },
    layout: {
        title: '办公室布局',
        content: `
            <h3>办公室布局风水</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>办公室宜光线充足</li>
                <li>老板办公室宜在后方</li>
                <li>动线宜顺畅不拥堵</li>
                <li>财位宜整洁明亮</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌办公室狭长阴暗</li>
                <li>忌大门正对厕所</li>
                <li>忌动线复杂混乱</li>
                <li>忌办公室有过多尖角</li>
            </ul>
        `
    },
    decoration: {
        title: '办公室装饰',
        content: `
            <h3>办公室装饰风水</h3>
            <p><strong>宜：</strong></p>
            <ul>
                <li>宜摆放绿植增加生气</li>
                <li>宜挂置山水画作</li>
                <li>可放置招财摆件</li>
                <li>装饰色调宜稳重</li>
            </ul>
            <p><strong>忌：</strong></p>
            <ul>
                <li>忌摆放过多假花假草</li>
                <li>忌挂置猛禽猛兽画像</li>
                <li>忌摆放尖锐工艺品</li>
                <li>忌装饰过于花哨</li>
            </ul>
        `
    }
};

const KNOWLEDGE_BASE = [
    {
        title: '什么是风水？',
        content: '风水是中国传统文化的重要组成部分，是研究人类赖以生存发展的微观物质（空气、水和土）和宏观环境（天地）的学说。风水的核心思想是人与大自然的和谐，达到"天人合一"的境界。'
    },
    {
        title: '阴阳五行学说',
        content: '阴阳五行是风水的理论基础。阴阳指事物的两个对立面，五行指金、木、水、火、土五种基本元素。五行相生相克，维持着宇宙的平衡。'
    },
    {
        title: '八卦与方位',
        content: '八卦包括乾、坤、震、巽、坎、离、艮、兑，分别代表天、地、雷、风、水、火、山、泽。每个卦象对应一个方位，在风水中有重要应用。'
    },
    {
        title: '如何确定财位？',
        content: '财位一般在客厅进门的斜对角位置。财位宜明亮、整洁，可放置招财物品如貔貅、金蟾等，增旺财运。'
    },
    {
        title: '常见风水煞气',
        content: '常见的煞气包括：尖角煞、天斩煞、穿堂煞、反光煞等。了解这些煞气并采取相应的化解方法，有助于改善居住环境。'
    },
    {
        title: '植物与风水',
        content: '植物在风水中有重要作用。旺宅的植物有：发财树、金钱树、富贵竹、绿萝等。植物不仅美化环境，还能调节气场。'
    }
];

const DIRECTIONS_DATA = [
    { angle: 0, name: "北方", element: "水", gua: "坎", meaning: "主智慧、事业，利于放置饮水机、鱼缸", color: "#4a90d9" },
    { angle: 45, name: "东北", element: "土", gua: "艮", meaning: "主靠山、贵人，宜保持整洁明亮", color: "#daa520" },
    { angle: 90, name: "东方", element: "木", gua: "震", meaning: "主成长、健康，适合放置绿植", color: "#4ade80" },
    { angle: 135, name: "东南", element: "木", gua: "巽", meaning: "主文昌、财运，利于书房布置", color: "#2dd4bf" },
    { angle: 180, name: "南方", element: "火", gua: "离", meaning: "主名誉、光明，采光要好", color: "#dc143c" },
    { angle: 225, name: "西南", element: "土", gua: "坤", meaning: "主家庭、女主人，宜温馨和谐", color: "#f59e0b" },
    { angle: 270, name: "西方", element: "金", gua: "兑", meaning: "主感情、口才，可放音乐设备", color: "#e0e7ff" },
    { angle: 315, name: "西北", element: "金", gua: "乾", meaning: "主权威、男主人，宜庄重整洁", color: "#c084fc" }
];

// 二十四山数据（专业风水罗盘二十四山向）
const TWENTY_FOUR_MOUNTAINS = [
    { angle: 352.5, mountain: "壬", element: "水", luck: "吉", meaning: "天位，主官贵、文昌" },
    { angle: 7.5, mountain: "子", element: "水", luck: "吉", meaning: "正北，主富贵、丁财" },
    { angle: 22.5, mountain: "癸", element: "水", luck: "吉", meaning: "帝位，主福禄、长寿" },
    { angle: 37.5, mountain: "丑", element: "土", luck: "中", meaning: "金库，主收藏、积蓄" },
    { angle: 52.5, mountain: "艮", element: "土", luck: "吉", meaning: "东北，主靠山、贵人" },
    { angle: 67.5, mountain: "寅", element: "木", luck: "吉", meaning: "木库，主文昌、事业" },
    { angle: 82.5, mountain: "甲", element: "木", luck: "吉", meaning: "东方，主健康、成长" },
    { angle: 97.5, mountain: "卯", element: "木", luck: "吉", meaning: "正东，主文昌、名声" },
    { angle: 112.5, mountain: "乙", element: "木", luck: "吉", meaning: "木器，主技艺、智慧" },
    { angle: 127.5, mountain: "辰", element: "土", luck: "中", meaning: "水库，主智慧、谋略" },
    { angle: 142.5, mountain: "巽", element: "木", luck: "吉", meaning: "东南，主文昌、财运" },
    { angle: 157.5, mountain: "巳", element: "火", luck: "吉", meaning: "火库，主文明、文采" },
    { angle: 172.5, mountain: "丙", element: "火", luck: "吉", meaning: "南方，主光明、文明" },
    { angle: 187.5, mountain: "午", element: "火", luck: "吉", meaning: "正南，主荣耀、事业" },
    { angle: 202.5, mountain: "丁", element: "火", luck: "吉", meaning: "火星，主文采、贵人" },
    { angle: 217.5, mountain: "未", element: "土", luck: "中", meaning: "木库，主收藏、积蓄" },
    { angle: 232.5, mountain: "坤", element: "土", luck: "吉", meaning: "西南，主家庭、女主人" },
    { angle: 247.5, mountain: "申", element: "金", luck: "吉", meaning: "金库，主官贵、权威" },
    { angle: 262.5, mountain: "庚", element: "金", luck: "吉", meaning: "西方，主决断、权力" },
    { angle: 277.5, mountain: "酉", element: "金", luck: "吉", meaning: "正西，主感情、事业" },
    { angle: 292.5, mountain: "辛", element: "金", luck: "吉", meaning: "金气，主文采、智慧" },
    { angle: 307.5, mountain: "戌", element: "土", luck: "中", meaning: "火库，主文明、积蓄" },
    { angle: 322.5, mountain: "乾", element: "金", luck: "吉", meaning: "西北，主权威、事业" },
    { angle: 337.5, mountain: "亥", element: "水", luck: "吉", meaning: "水库，主智慧、福禄" }
];

const SCENE_DATA = {
    home: {
        title: "🏠 家居布局",
        tips: [
            { title: "大门方位", content: "大门应朝东、南或东南，避免正对电梯、楼梯或卫生间。门口保持整洁明亮，可放红色脚垫增旺气场。" },
            { title: "客厅布局", content: "沙发靠实墙，避开横梁，财位在进门斜对角，保持明亮整洁，可放绿色植物增加生气。" },
            { title: "卧室布置", content: "床头靠实墙，避开镜子正对床，远离卫生间门不对床，保持温馨舒适。" },
            { title: "厨房风水", content: "炉灶避开水火不相冲，炉灶靠实墙，保持整洁通风。" }
        ]
    },
    office: {
        title: "🏢 办公布置",
        tips: [
            { title: "办公桌方位", content: "办公桌靠实墙，面向门口，避开正对柱子或墙角。" },
            { title: "老板办公室", content: "位于后方或角落，房间方正，采光好。" },
            { title: "财位布置", content: "财位明亮整洁，可放置貔貅、金蟾等招财物品。" },
            { title: "动线设计", content: "动线顺畅，避开拥堵，避免尖角冲射。" }
        ]
    },
    shop: {
        title: "🏪 商铺旺财",
        tips: [
            { title: "店面朝向", content: "大门朝东或朝南最佳，采光充足，吸引顾客。" },
            { title: "收银台位置", content: "位于财位，靠实墙，正对门口，背后有靠。" },
            { title: "店内布置", content: "宽敞明亮，动线顺畅，避免杂乱。" },
            { title: "招财布局", content: "放置风水轮、鱼缸在财位，增加财运。" }
        ]
    },
    study: {
        title: "📚 书房文昌",
        tips: [
            { title: "文昌方位", content: "东南方为文昌位，宜设书房。" },
            { title: "书桌布置", content: "坐北朝南或坐东朝西，避开门窗冲射。" },
            { title: "文昌塔", content: "放置在书桌左手边，增旺学业。" },
            { title: "书房环境", content: "整洁安静，采光好，绿植点缀。" }
        ]
    },
    bedroom: {
        title: "🛏️ 卧室桃花",
        tips: [
            { title: "桃花方位", content: "正西为桃花位，可放鲜花。" },
            { title: "床的摆放", content: "床头靠实墙，床尾不对门。" },
            { title: "卧室装饰", content: "温馨浪漫，柔和色调。" },
            { title: "避忌事项", content: "避免镜子、刀具，保持整洁。" }
        ]
    },
    garden: {
        title: "🌳 庭院设计",
        tips: [
            { title: "庭院格局", content: "方正开阔，前低后高。" },
            { title: "植物布局", content: "绿植茂密，四季有花。" },
            { title: "水景布置", content: "水流缓慢，弯曲有情。" },
            { title: "道路设计", content: "曲径通幽，避免直冲。" }
        ]
    }
};

const BAZHAI_DATA = {
    kan: {
        name: "坎宅（坐北朝南）",
        element: "水",
        lucky: [
            { direction: "东南", name: "生气", meaning: "大利财运、事业" },
            { direction: "南", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "东", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "北", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "西南", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "东北", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "西", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "西北", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    gen: {
        name: "艮宅（坐东北朝西南）",
        element: "土",
        lucky: [
            { direction: "西", name: "生气", meaning: "大利财运、事业" },
            { direction: "西北", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "西南", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "东北", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "北", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "南", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "东", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "东南", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    zhen: {
        name: "震宅（坐东朝西）",
        element: "木",
        lucky: [
            { direction: "南", name: "生气", meaning: "大利财运、事业" },
            { direction: "东南", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "北", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "东", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "东北", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "西南", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "西北", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "西", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    xun: {
        name: "巽宅（坐东南朝西北）",
        element: "木",
        lucky: [
            { direction: "北", name: "生气", meaning: "大利财运、事业" },
            { direction: "东", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "南", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "东南", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "西", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "西北", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "西南", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "东北", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    li: {
        name: "离宅（坐南朝北）",
        element: "火",
        lucky: [
            { direction: "东", name: "生气", meaning: "大利财运、事业" },
            { direction: "北", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "东南", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "南", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "西北", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "西", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "东北", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "西南", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    kun: {
        name: "坤宅（坐西南朝东北）",
        element: "土",
        lucky: [
            { direction: "西北", name: "生气", meaning: "大利财运、事业" },
            { direction: "西", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "东北", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "西南", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "东南", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "东", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "南", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "北", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    dui: {
        name: "兑宅（坐西朝东）",
        element: "金",
        lucky: [
            { direction: "东北", name: "生气", meaning: "大利财运、事业" },
            { direction: "西南", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "西北", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "西", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "东", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "东南", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "北", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "南", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    },
    qian: {
        name: "乾宅（坐西北朝东南）",
        element: "金",
        lucky: [
            { direction: "西南", name: "生气", meaning: "大利财运、事业" },
            { direction: "东北", name: "延年", meaning: "健康长寿、家庭和睦" },
            { direction: "西", name: "天医", meaning: "身体健康、贵人相助" },
            { direction: "西北", name: "伏位", meaning: "平稳发展、蓄势待发" }
        ],
        unlucky: [
            { direction: "南", name: "祸害", meaning: "是非口舌、需注意" },
            { direction: "北", name: "六煞", meaning: "人缘较差、需化解" },
            { direction: "东南", name: "五鬼", meaning: "破财损丁、需化解" },
            { direction: "东", name: "绝命", meaning: "大凶之位、需化解" }
        ]
    }
};

const SHANSHAN_DATA = [
    { name: "壬山", degree: "337.5-352.5", element: "水", meaning: "属水，主智慧，宜坐壬向丙，大利北方" },
    { name: "子山", degree: "352.5-7.5", element: "水", meaning: "正北，属水，主事业，宜坐子向午" },
    { name: "癸山", degree: "7.5-22.5", element: "水", meaning: "属水，主收藏，宜坐癸向丁" },
    { name: "丑山", degree: "22.5-37.5", element: "土", meaning: "属土，主金库，宜坐丑向未" },
    { name: "艮山", degree: "37.5-52.5", element: "土", meaning: "东北，属土，主靠山，宜坐艮向坤" },
    { name: "寅山", degree: "52.5-67.5", element: "木", meaning: "属木，主木库，宜坐寅向申" },
    { name: "甲山", degree: "67.5-82.5", element: "木", meaning: "属木，主生长，宜坐甲向庚" },
    { name: "卯山", degree: "82.5-97.5", element: "木", meaning: "正东，属木，主健康，宜坐卯向酉" },
    { name: "乙山", degree: "97.5-112.5", element: "木", meaning: "属木，主柔顺，宜坐乙向辛" },
    { name: "辰山", degree: "112.5-127.5", element: "土", meaning: "属土，主水库，宜坐辰向戌" },
    { name: "巽山", degree: "127.5-142.5", element: "木", meaning: "东南，属木，主文昌，宜坐巽向乾" },
    { name: "巳山", degree: "142.5-157.5", element: "火", meaning: "属火，主火库，宜坐巳向亥" },
    { name: "丙山", degree: "157.5-172.5", element: "火", meaning: "属火，主光明，宜坐丙向壬" },
    { name: "午山", degree: "172.5-187.5", element: "火", meaning: "正南，属火，主名誉，宜坐午向子" },
    { name: "丁山", degree: "187.5-202.5", element: "火", meaning: "属火，主文明，宜坐丁向癸" },
    { name: "未山", degree: "202.5-217.5", element: "土", meaning: "属土，主木库，宜坐未向丑" },
    { name: "坤山", degree: "217.5-232.5", element: "土", meaning: "西南，属土，主家庭，宜坐坤向艮" },
    { name: "申山", degree: "232.5-247.5", element: "金", meaning: "属金，主水库，宜坐申向寅" },
    { name: "庚山", degree: "247.5-262.5", element: "金", meaning: "属金，主刚强，宜坐庚向甲" },
    { name: "酉山", degree: "262.5-277.5", element: "金", meaning: "正西，属金，主感情，宜坐酉向卯" },
    { name: "辛山", degree: "277.5-292.5", element: "金", meaning: "属金，主收获，宜坐辛向乙" },
    { name: "戌山", degree: "292.5-307.5", element: "土", meaning: "属土，主火库，宜坐戌向辰" },
    { name: "乾山", degree: "307.5-322.5", element: "金", meaning: "西北，属金，主权威，宜坐乾向巽" },
    { name: "亥山", degree: "322.5-337.5", element: "水", meaning: "属水，主木库，宜坐亥向巳" }
];

const MASCOTS_DATA = {
    wealth: [
        { icon: "🐉", name: "龙龟", meaning: "招财镇宅，化煞旺财，宜放财位" },
        { icon: "🦗", name: "金蟾", meaning: "三足金蟾，口吐金钱，宜放收银台" },
        { icon: "🦁", name: "貔貅", meaning: "只进不出，旺财化煞，宜对门口" },
        { icon: "💰", name: "聚宝盆", meaning: "聚财纳福，象征富足，宜放财位" },
        { icon: "🐠", name: "风水鱼", meaning: "水为财，养鱼旺财，宜放财位" },
        { icon: "🪙", name: "五帝钱", meaning: "清代五帝钱，招财化煞，可随身带" }
    ],
    career: [
        { icon: "🗼", name: "文昌塔", meaning: "旺文益智，助事业学业，宜放书桌" },
        { icon: "🦢", name: "天鹅", meaning: "高贵优雅，助事业发展，宜放办公室" },
        { icon: "🐴", name: "马到成功", meaning: "事业顺利，马到功成，宜放办公区" },
        { icon: "⛵", name: "一帆风顺", meaning: "事业顺利，平步青云，宜放办公区" },
        { icon: "🦅", name: "老鹰", meaning: "高瞻远瞩，大展宏图，宜放老板室" },
        { icon: "🐘", name: "大象", meaning: "太平有象，事业稳健，宜放背后" }
    ],
    health: [
        { icon: "🍑", name: "寿桃", meaning: "健康长寿，福寿康宁，宜放卧室" },
        { icon: "🦌", name: "福禄寿鹿", meaning: "健康长寿，福气满满，宜放客厅" },
        { icon: "🎋", name: "葫芦", meaning: "化病保健康，寓意健康，宜放床头" },
        { icon: "🌿", name: "绿植", meaning: "生机勃勃，净化空气，宜放家中" },
        { icon: "🧘", name: "弥勒佛", meaning: "开心快乐，心胸开阔，宜放客厅" },
        { icon: "🏔️", name: "泰山石", meaning: "稳如泰山，保平安健康，宜补缺角" }
    ],
    love: [
        { icon: "🌹", name: "桃花", meaning: "旺桃花运，招正缘，宜放正西" },
        { icon: "🦆", name: "鸳鸯", meaning: "婚姻美满，百年好合，宜放卧室" },
        { icon: "💎", name: "粉水晶", meaning: "招桃花，增进感情，可佩带" },
        { icon: "🔮", name: "和合二仙", meaning: "家庭和睦，婚姻美满，宜放卧室" },
        { icon: "🎎", name: "双喜", meaning: "喜庆吉祥，婚姻美满，宜用装饰" },
        { icon: "🦋", name: "蝴蝶", meaning: "浪漫爱情，比翼双飞，宜放卧室" }
    ],
    protection: [
        { icon: "🐲", name: "龙", meaning: "权威尊贵，化煞镇宅，宜放客厅" },
        { icon: "🐯", name: "虎", meaning: "威猛镇宅，辟邪化煞，宜对门窗" },
        { icon: "🔔", name: "风铃", meaning: "化煞驱邪，调节气场，宜挂窗边" },
        { icon: "🪞", name: "八卦镜", meaning: "化煞辟邪，反射煞气，宜挂门外" },
        { icon: "🏮", name: "红灯笼", meaning: "辟邪消灾，增添阳气，宜挂大门" },
        { icon: "🧿", name: "五帝钱", meaning: "化煞辟邪，保平安，可随身带" }
    ]
};

class FengShuiApp {
    constructor() {
        this.currentPage = 'home';
        this.compassAngle = 0;
        this.compassActive = false;
        this.compassNeedleAngle = 0;
        this.currentMonth = new Date();
        this.userData = {
            isLoggedIn: false,
            name: '',
            isVip: false,
            vipExpire: null,
            stats: {
                bazi: 0,
                hehun: 0,
                fortune: 0
            }
        };
        this.init();
    }

    // 安全辅助工具函数
    safeQueryAll(selector) {
        try {
            return document.querySelectorAll(selector);
        } catch (e) {
            return [];
        }
    }

    init() {
        try {
            // 安全执行初始化的辅助函数
            const safeInit = (fnName, fn) => {
                try {
                    fn.call(this);
                } catch (error) {
                    console.error(`初始化 ${fnName} 失败:`, error);
                }
            };
            
            safeInit('bindEvents', this.bindEvents);
            safeInit('showDailyTips', this.showDailyTips);
            safeInit('renderCalendar', this.renderCalendar);
            safeInit('renderKnowledge', this.renderKnowledge);
            safeInit('renderHomeFengshui', () => this.renderHomeFengshui('entrance'));
            safeInit('renderOfficeFengshui', () => this.renderOfficeFengshui('desk'));
            safeInit('initCompass', this.initCompass);
            safeInit('renderSceneContent', () => this.renderSceneContent('home'));
            safeInit('renderShanshanGrid', this.renderShanshanGrid);
            safeInit('renderMascotsContent', () => this.renderMascotsContent('wealth'));
            safeInit('initSelectors', this.initSelectors);
            safeInit('initAuth', this.initAuth);
            safeInit('initFortune', this.initFortune);
            safeInit('initHehun', this.initHehun);
            safeInit('initShop', this.initShop);
            
            console.log('风水APP初始化完成！');
        } catch (globalError) {
            console.error('全局初始化失败:', globalError);
        }
    }

    initSelectors() {
        try {
            // 安全查询选择器
            const safeQueryOne = (selector) => {
                try {
                    return document.querySelector(selector);
                } catch (e) {
                    return null;
                }
            };
            
            // 初始化十二时辰选择器
            const shichenItems = this.safeQueryAll('.shichen-item');
            shichenItems.forEach(item => {
                item.addEventListener('click', () => {
                    try {
                        shichenItems.forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                        const input = document.getElementById('bazi-time');
                        if (input) input.value = item.dataset.value;
                    } catch (e) {
                        console.error('选择时辰出错:', e);
                    }
                });
            });
            // 默认选中第一个
            if (shichenItems[0]) shichenItems[0].classList.add('active');

            // 初始化八宅选择器
            const bazhaiItems = this.safeQueryAll('.bazhai-item');
            bazhaiItems.forEach(item => {
                item.addEventListener('click', () => {
                    try {
                        bazhaiItems.forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                        const input = document.getElementById('bazhai-direction');
                        if (input) input.value = item.dataset.value;
                    } catch (e) {
                        console.error('选择八宅出错:', e);
                    }
                });
            });
            // 默认选中第一个
            if (bazhaiItems[0]) bazhaiItems[0].classList.add('active');
        } catch (error) {
            console.error('初始化选择器出错:', error);
        }
    }
    
    bindEvents() {
        try {
            const safeBindById = (id, handler) => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('click', handler);
            };
            
            const safeBindByQuery = (selector, handler) => {
                this.safeQueryAll(selector).forEach(el => {
                    el.addEventListener('click', handler);
                });
            };
            
            // 导航按钮
            safeBindByQuery('.nav-btn, .nav-item', (e) => {
                try {
                    const page = e.currentTarget.dataset.page;
                    if (page) this.switchPage(page);
                } catch (err) {
                    console.error('导航点击出错:', err);
                }
            });

            // 功能卡片（已优化）
            this.safeQueryAll('.feature-card').forEach(card => {
                card.addEventListener('click', () => {
                    try {
                        const page = card.dataset.page;
                        const isPremium = card.classList.contains('premium');
                        
                        if (isPremium) {
                            if (!this.userData.isLoggedIn) {
                                this.showAuthModal();
                                return;
                            }
                            if (!this.userData.isVip) {
                                this.showVipModal();
                                return;
                            }
                        }
                        
                        this.switchPage(page);
                    } catch (error) {
                        console.error('功能卡片点击出错:', error);
                    }
                });
            });

            // 罗盘初始化逻辑已集成到 switchPage 函数中

            // 测算按钮
            safeBindById('calc-bazi', () => this.calculateBazi());
            safeBindById('calc-bazhai', () => this.calculateBazhai());

            // 罗盘标签页
            this.safeQueryAll('.compass-tabs .tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        this.safeQueryAll('.compass-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.safeQueryAll('.compass-tab-content').forEach(c => c.classList.add('hidden'));
                        const tabId = btn.dataset.tab;
                        const tabContent = document.getElementById(tabId);
                        if (tabContent) tabContent.classList.remove('hidden');
                    } catch (err) {
                        console.error('罗盘标签页切换出错:', err);
                    }
                });
            });

            // 风水标签页
            this.safeQueryAll('.fengshui-tabs .tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        this.safeQueryAll('.fengshui-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        const container = btn.closest('.home-fengshui-container, .office-fengshui-container');
                        if (container?.classList.contains('home-fengshui-container')) {
                            this.renderHomeFengshui(btn.dataset.tab);
                        } else if (container) {
                            this.renderOfficeFengshui(btn.dataset.tab);
                        }
                    } catch (err) {
                        console.error('风水标签页切换出错:', err);
                    }
                });
            });

            // 吉祥物标签页
            this.safeQueryAll('.mascots-tabs .tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        this.safeQueryAll('.mascots-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.renderMascotsContent(btn.dataset.tab);
                    } catch (err) {
                        console.error('吉祥物标签页切换出错:', err);
                    }
                });
            });

            // 场景按钮
            this.safeQueryAll('.scene-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        this.safeQueryAll('.scene-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.renderSceneContent(btn.dataset.scene);
                    } catch (err) {
                        console.error('场景切换出错:', err);
                    }
                });
            });

            // 日历导航
            safeBindById('prev-month', () => {
                try {
                    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
                    this.renderCalendar();
                } catch (err) {
                    console.error('日历上月出错:', err);
                }
            });

            safeBindById('next-month', () => {
                try {
                    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
                    this.renderCalendar();
                } catch (err) {
                    console.error('日历下月出错:', err);
                }
            });
            
            // 大师咨询按钮
            this.safeQueryAll('.consult-btn, #submit-consult').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.showToast('感谢您的咨询！我们会尽快与您联系！');
                });
            });
            
            // 商家入驻表单
            const merchantForm = document.getElementById('merchantForm');
            if (merchantForm) {
                merchantForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleMerchantSubmit();
                });
            }
            
            // 商家分类点击
            this.safeQueryAll('.category-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.handleCategoryClick(item);
                });
            });
        } catch (globalError) {
            console.error('绑定事件全局出错:', globalError);
        }
    }
    
    // 处理商家分类点击
    handleCategoryClick(item) {
        try {
            safeQueryAll('.category-item').forEach(i => {
                i.style.border = 'none';
                i.style.background = 'rgba(255, 255, 255, 0.05)';
            });
            item.style.border = '2px solid #ffd700';
            item.style.background = 'rgba(255, 215, 0, 0.1)';
            this.showToast('已选择' + item.children[1].textContent + '！');
        } catch (error) {
            console.error('处理分类点击出错:', error);
        }
    }
    
    // 处理商家入驻申请
    handleMerchantSubmit() {
        try {
            this.showToast('入驻申请已提交！我们会在3个工作日内联系您！');
            document.getElementById('merchantForm')?.reset();
        } catch (error) {
            console.error('提交入驻申请出错:', error);
            this.showToast('提交失败，请稍后重试');
        }
    }

    switchPage(page) {
        try {
            if (!page) return;
            
            const safeQueryAll = (selector) => {
                try {
                    return document.querySelectorAll(selector);
                } catch (e) {
                    return [];
                }
            };
            
            safeQueryAll('.page').forEach(p => p.classList.remove('active'));
            safeQueryAll('.nav-btn, .nav-item').forEach(btn => btn.classList.remove('active'));
            
            const targetPage = document.getElementById(`page-${page}`);
            if (targetPage) targetPage.classList.add('active');
            
            const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
            if (navBtn) navBtn.classList.add('active');
            
            const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
            if (navItem) navItem.classList.add('active');
            
            this.currentPage = page;
            
            // 处理罗盘初始化
            if (page === 'compass') {
                this.startCompassSensor();
            } else {
                this.stopCompassSensor();
            }
        } catch (error) {
            console.error('页面切换出错:', error);
        }
    }

    navigateTo(page) {
        this.switchPage(page);
    }

    showDailyTips() {
        try {
            const tips = [
                { yi: '嫁娶、开市、交易', ji: '动土、安葬' },
                { yi: '祭祀、祈福、求嗣', ji: '嫁娶、移徙' },
                { yi: '出行、搬家、修造', ji: '开光、嫁娶' },
                { yi: '纳财、开市、交易', ji: '动土、破土' }
            ];
            const today = tips[Math.floor(Math.random() * tips.length)];
            const tipsContent = document.getElementById('daily-tips-content');
            if (tipsContent) {
                tipsContent.innerHTML = `
                    <p><strong style="color: #4ade80;">宜：</strong>${today.yi}</p>
                    <p><strong style="color: #ff6b6b;">忌：</strong>${today.ji}</p>
                `;
            }
        } catch (error) {
            console.error('显示每日宜忌出错:', error);
        }
    }

    // 初始化罗盘
    initCompass() {
        try {
            this.updateCompassDisplay();
            this.render24Mountains();
        } catch (error) {
            console.error('初始化罗盘出错:', error);
        }
    }

    // 渲染二十四山刻度
    render24Mountains() {
        try {
            const ring24 = document.getElementById('ring-24');
            if (!ring24) return;

            let html = '';
            TWENTY_FOUR_MOUNTAINS.forEach((mountain, index) => {
                const angle = index * 15;
                html += `<span class="mountain" style="transform: rotate(${angle}deg) translate(0, -70px)">${mountain.mountain}</span>`;
            });
            ring24.innerHTML = html;
        } catch (error) {
            console.error('渲染二十四山出错:', error);
        }
    }

    // 启动罗盘传感器
    startCompassSensor() {
        try {
            const statusIndicator = document.getElementById('status-indicator');
            const statusText = document.getElementById('status-text');
            
            // 首先检测是否是手机设备
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // 如果不是手机设备，直接使用备用触摸模式
            if (!isMobile) {
                this.fallbackCompass();
                return;
            }
            
            // 首先尝试设备方向传感器（只在手机上）
            let sensorAvailable = false;
            
            // 检查设备方向传感器支持
            if ('DeviceOrientationEvent' in window && 
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                // iOS 13+ 需要用户授权
                sensorAvailable = true;
                DeviceOrientationEvent.requestPermission()
                    .then(response => {
                        if (response === 'granted') {
                            if (statusIndicator) statusIndicator.classList.add('active');
                            if (statusText) statusText.textContent = '罗盘已激活，请移动手机';
                            this.compassActive = true;
                            window.addEventListener('deviceorientation', this.handleDeviceOrientation.bind(this));
                        } else {
                            this.showToast('需要传感器权限才能使用罗盘');
                            this.fallbackCompass();
                        }
                    })
                    .catch(error => {
                        console.error('传感器权限请求失败:', error);
                        this.fallbackCompass();
                    });
            } else if ('DeviceOrientationEvent' in window) {
                // 其他支持设备方向的设备
                sensorAvailable = true;
                if (statusIndicator) statusIndicator.classList.add('active');
                if (statusText) statusText.textContent = '罗盘已激活，请移动手机';
                this.compassActive = true;
                window.addEventListener('deviceorientation', this.handleDeviceOrientation.bind(this));
                // 设置超时检查传感器是否正常工作
                setTimeout(() => {
                    if (this.compassAngle === 0 && this.compassActive) {
                        this.stopCompassSensor();
                        this.fallbackCompass();
                    }
                }, 2000);
            } else {
                // 不支持设备方向传感器
                this.fallbackCompass();
            }
        } catch (error) {
            console.error('启动罗盘传感器出错:', error);
            this.fallbackCompass();
        }
    }

    // 停止罗盘传感器
    stopCompassSensor() {
        try {
            if (this.compassActive) {
                window.removeEventListener('deviceorientation', this.handleDeviceOrientation.bind(this));
                this.compassActive = false;
            }
            
            // 更新状态显示
            const statusIndicator = document.getElementById('status-indicator');
            const statusText = document.getElementById('status-text');
            if (statusIndicator) statusIndicator.classList.remove('active');
            if (statusText) statusText.textContent = '罗盘已暂停';
        } catch (error) {
            console.error('停止罗盘传感器出错:', error);
        }
    }

    // 处理设备方向变化
    handleDeviceOrientation(event) {
        try {
            let heading = 0;
            
            // 检查传感器数据是否有效
            if (event.webkitCompassHeading !== undefined && event.webkitCompassHeading !== null && !isNaN(event.webkitCompassHeading)) {
                // iOS 设备
                heading = event.webkitCompassHeading;
            } else if (event.alpha !== undefined && event.alpha !== null && !isNaN(event.alpha) && event.alpha !== 0) {
                // 其他设备（排除初始值0）
                heading = 360 - event.alpha;
            } else {
                // 无效数据，切换到备用模式
                this.stopCompassSensor();
                this.fallbackCompass();
                return;
            }
            
            // 标准化角度
            this.compassAngle = ((heading % 360) + 360) % 360;
            this.compassNeedleAngle = -this.compassAngle;
            
            this.updateCompassDisplay();
            this.animateCompass();
        } catch (error) {
            console.error('处理设备方向出错:', error);
        }
    }

    // 备用罗盘（使用鼠标/触摸模拟）
    fallbackCompass() {
        try {
            const statusText = document.getElementById('status-text');
            if (statusText) statusText.textContent = '触摸罗盘手动调整';
            
            // 添加触摸/鼠标控制
            const compassWrapper = document.querySelector('.compass-wrapper');
            if (compassWrapper) {
                let isDragging = false;
                
                compassWrapper.style.cursor = 'pointer';
                
                const startDrag = (e) => {
                    isDragging = true;
                    updateAngle(e);
                };
                
                const onDrag = (e) => {
                    if (isDragging) updateAngle(e);
                };
                
                const endDrag = () => {
                    isDragging = false;
                };
                
                const updateAngle = (e) => {
                    const rect = compassWrapper.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    
                    let clientX, clientY;
                    if (e.touches) {
                        clientX = e.touches[0].clientX;
                        clientY = e.touches[0].clientY;
                    } else {
                        clientX = e.clientX;
                        clientY = e.clientY;
                    }
                    
                    const deltaX = clientX - centerX;
                    const deltaY = clientY - centerY;
                    
                    let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
                    this.compassAngle = ((-angle + 180) % 360 + 360) % 360;
                    this.compassNeedleAngle = -this.compassAngle;
                    
                    this.updateCompassDisplay();
                    this.animateCompass();
                };
                
                // 绑定事件
                compassWrapper.addEventListener('mousedown', startDrag);
                document.addEventListener('mousemove', onDrag);
                document.addEventListener('mouseup', endDrag);
                
                compassWrapper.addEventListener('touchstart', startDrag);
                document.addEventListener('touchmove', onDrag);
                document.addEventListener('touchend', endDrag);
            }
        } catch (error) {
            console.error('备用罗盘初始化出错:', error);
        }
    }

    // 动画罗盘
    animateCompass() {
        try {
            // 旋转整个罗盘盘面（二十四山）
            const compassDial = document.getElementById('compass-dial');
            if (compassDial) {
                compassDial.style.transform = `rotate(${this.compassAngle}deg)`;
            }
            
            // 磁针保持指向北方（不旋转或轻微调整）
            const compassNeedle = document.getElementById('compass-needle');
            if (compassNeedle) {
                compassNeedle.style.transform = `rotate(${this.compassNeedleAngle}deg)`;
            }
        } catch (error) {
            console.error('动画罗盘出错:', error);
        }
    }

    // 更新罗盘显示
    updateCompassDisplay() {
        try {
            const normalizedAngle = this.compassAngle;
            const direction = this.getDirectionByAngle(normalizedAngle);
            const mountain = this.getMountainByAngle(normalizedAngle);
            
            const el1 = document.getElementById('compass-direction');
            if (el1) el1.textContent = direction.name;
            
            const el2 = document.getElementById('compass-angle');
            if (el2) el2.textContent = `${Math.round(normalizedAngle)}°`;
            
            const el3 = document.getElementById('compass-mountain');
            if (el3) el3.textContent = mountain.mountain;
            
            const el4 = document.getElementById('compass-element');
            if (el4) el4.textContent = direction.element;
            
            const el5 = document.getElementById('compass-gua');
            if (el5) el5.textContent = direction.gua;
            
            const el6 = document.getElementById('compass-fortune');
            if (el6) {
                el6.textContent = mountain.luck === '吉' ? '大吉' : '中平';
                el6.style.color = mountain.luck === '吉' ? '#4ade80' : '#ffd700';
            }
            
            const el7 = document.getElementById('compass-interpretation');
            if (el7) el7.innerHTML = `
                <h4>方位解读</h4>
                <p><strong>${direction.name}</strong>属<strong>${direction.element}</strong>，对应<strong>${direction.gua}</strong>卦，${direction.meaning}</p>
                <p style="margin-top: 10px;"><strong>二十四山：${mountain.mountain}</strong> - ${mountain.meaning}</p>
            `;
        } catch (error) {
            console.error('更新罗盘显示出错:', error);
        }
    }

    // 根据角度获取二十四山
    getMountainByAngle(angle) {
        let closest = TWENTY_FOUR_MOUNTAINS[0];
        let minDiff = 360;
        
        TWENTY_FOUR_MOUNTAINS.forEach(mountain => {
            const diff = Math.min(
                Math.abs(angle - mountain.angle),
                Math.abs(angle - mountain.angle - 360),
                Math.abs(angle - mountain.angle + 360)
            );
            if (diff < minDiff) {
                minDiff = diff;
                closest = mountain;
            }
        });
        
        return closest;
    }

    getDirectionByAngle(angle) {
        let closest = DIRECTIONS_DATA[0];
        let minDiff = 360;
        
        DIRECTIONS_DATA.forEach(dir => {
            const diff = Math.min(
                Math.abs(angle - dir.angle),
                Math.abs(angle - dir.angle - 360),
                Math.abs(angle - dir.angle + 360)
            );
            if (diff < minDiff) {
                minDiff = diff;
                closest = dir;
            }
        });
        
        return closest;
    }

    calculateBazi() {
        try {
            const nameEl = document.getElementById('bazi-name');
            const genderEl = document.getElementById('bazi-gender');
            const dateEl = document.getElementById('bazi-date');
            const timeEl = document.getElementById('bazi-time');
            
            const name = nameEl?.value || '缘主';
            const gender = genderEl?.value || 'male';
            const date = dateEl?.value || '';
            const time = timeEl?.value || '0';

            if (!date) {
                this.showToast('请选择出生日期');
                return;
            }

            const d = new Date(date);
            const year = d.getFullYear();
            const yearTG = TIANGAN[(year - 4) % 10];
            const yearDZ = DIZHI[(year - 4) % 12];
            const shengxiao = SHENGXIAO[(year - 4) % 12];

            const month = d.getMonth() + 1;
            const monthTG = TIANGAN[(month + 1) % 10];
            const monthDZ = DIZHI[(month + 1) % 12];

            const dayTG = TIANGAN[d.getDate() % 10];
            const dayDZ = DIZHI[d.getDate() % 12];

            const timeIndex = parseInt(time);
            const timeDZIndex = timeIndex >= 23 ? 0 : Math.floor((timeIndex - 1) / 2);
            const timeTG = TIANGAN[timeDZIndex % 10];
            const timeDZ = DIZHI[timeDZIndex];

            const bazi = [
                { tg: yearTG, dz: yearDZ },
                { tg: monthTG, dz: monthDZ },
                { tg: dayTG, dz: dayDZ },
                { tg: timeTG, dz: timeDZ }
            ];

            const elements = this.analyzeElements(bazi);
            const destiny = this.getDestinyAnalysis(elements, gender);

            const resultEl = document.getElementById('bazi-result');
            if (resultEl) {
                resultEl.innerHTML = `
                    <h3 style="color: #dc143c; margin-bottom: 20px;">${name}的八字测算结果</h3>
                    <div style="background: rgba(220,20,60,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <div style="font-size: 28px; text-align: center; letter-spacing: 10px; margin-bottom: 10px;">
                            ${yearTG}${yearDZ} ${monthTG}${monthDZ} ${dayTG}${dayDZ} ${timeTG}${timeDZ}
                        </div>
                        <p style="text-align: center; color: #b0b0b0;">生肖：${shengxiao}</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: #dc143c; margin-bottom: 10px;">五行分析</h4>
                        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px;">
                            <span style="background: #ffeaa7; padding: 8px 15px; border-radius: 8px; color: #333;">金: ${elements.jin}</span>
                            <span style="background: #81ecec; padding: 8px 15px; border-radius: 8px; color: #333;">木: ${elements.mu}</span>
                            <span style="background: #74b9ff; padding: 8px 15px; border-radius: 8px; color: #333;">水: ${elements.shui}</span>
                            <span style="background: #ff7675; padding: 8px 15px; border-radius: 8px; color: #333;">火: ${elements.huo}</span>
                            <span style="background: #fdcb6e; padding: 8px 15px; border-radius: 8px; color: #333;">土: ${elements.tu}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: #dc143c; margin-bottom: 10px;">命运简析</h4>
                        <p style="line-height: 2; color: #b0b0b0;">${destiny}</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('八字测算出错:', error);
            this.showToast('八字测算出错，请重试');
        }
    }

    analyzeElements(bazi) {
        const tgElement = { '甲': 'mu', '乙': 'mu', '丙': 'huo', '丁': 'huo', '戊': 'tu', '己': 'tu', '庚': 'jin', '辛': 'jin', '壬': 'shui', '癸': 'shui' };
        const dzElement = { '子': 'shui', '丑': 'tu', '寅': 'mu', '卯': 'mu', '辰': 'tu', '巳': 'huo', '午': 'huo', '未': 'tu', '申': 'jin', '酉': 'jin', '戌': 'tu', '亥': 'shui' };

        const result = { jin: 0, mu: 0, shui: 0, huo: 0, tu: 0 };
        bazi.forEach(item => {
            result[tgElement[item.tg]]++;
            result[dzElement[item.dz]]++;
        });
        return result;
    }

    getDestinyAnalysis(elements, gender) {
        const total = elements.jin + elements.mu + elements.shui + elements.huo + elements.tu;
        const maxElement = Object.entries(elements).sort((a, b) => b[1] - a[1])[0];
        const elementNames = { jin: '金', mu: '木', shui: '水', huo: '火', tu: '土' };

        return `您的命格${elementNames[maxElement[0]]}较旺，${gender === 'male' ? '男子' : '女子'}此格，为人聪明机敏，有进取心。${maxElement[0] === 'huo' ? '热情开朗，待人真诚' : maxElement[0] === 'shui' ? '智慧过人，善于谋略' : maxElement[0] === 'mu' ? '正直善良，有仁爱之心' : maxElement[0] === 'jin' ? '刚毅果断，讲义气' : '稳重踏实，值得信赖'}。建议多结交良师益友，把握机遇，定能成就一番事业。`;
    }

    renderHomeFengshui(tab) {
        const data = HOME_FENGSHUI[tab];
        document.getElementById('home-fengshui-content').innerHTML = data.content;
    }

    renderOfficeFengshui(tab) {
        const data = OFFICE_FENGSHUI[tab];
        document.getElementById('office-fengshui-content').innerHTML = data.content;
    }

    renderSceneContent(scene) {
        const data = SCENE_DATA[scene];
        const html = `
            <h3 style="color: #dc143c; margin-bottom: 20px;">${data.title}</h3>
            <div class="scene-tips">
                ${data.tips.map(tip => `
                    <div class="scene-tip">
                        <h4>${tip.title}</h4>
                        <p>${tip.content}</p>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('scene-content').innerHTML = html;
    }

    renderCalendar() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        document.getElementById('calendar-title').textContent = `${year}年${month + 1}月`;

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDay = firstDay.getDay();
        const daysInMonth = lastDay.getDate();

        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        let html = weekdays.map(d => `<div style="text-align:center;font-weight:bold;color:#dc143c;padding:10px;">${d}</div>`).join('');

        for (let i = 0; i < startDay; i++) {
            html += '<div></div>';
        }

        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isToday = date.toDateString() === today.toDateString();
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            html += `
                <div class="calendar-day ${isToday ? 'today' : ''} ${isWeekend ? 'weekend' : ''}" data-date="${year}-${month + 1}-${day}">
                    ${day}
                </div>
            `;
        }

        document.getElementById('calendar-grid').innerHTML = html;

        document.querySelectorAll('.calendar-day[data-date]').forEach(day => {
            day.addEventListener('click', () => this.showCalendarDetail(day.dataset.date));
        });

        this.showCalendarDetail(`${year}-${month + 1}-${today.getDate()}`);
    }

    showCalendarDetail(dateStr) {
        const activities = [
            { yi: '嫁娶、开市、交易、立券', ji: '动土、破土、安葬' },
            { yi: '祭祀、祈福、求嗣、开光', ji: '嫁娶、移徙、入宅' },
            { yi: '出行、修造、动土、移徙', ji: '开市、交易、求财' },
            { yi: '纳财、开市、交易、安葬', ji: '祭祀、祈福、嫁娶' }
        ];
        const today = activities[Math.floor(Math.random() * activities.length)];
        const god = ['喜神', '财神', '福神', '贵神'][Math.floor(Math.random() * 4)];
        const direction = ['东南', '西北', '正东', '西南'][Math.floor(Math.random() * 4)];

        document.getElementById('calendar-detail').innerHTML = `
            <h3 style="color: #dc143c; margin-bottom: 20px;">${dateStr} 黄历</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: rgba(74,222,128,0.1); padding: 20px; border-radius: 10px;">
                    <h4 style="color: #4ade80; margin-bottom: 10px;">宜</h4>
                    <p style="line-height: 1.8;">${today.yi}</p>
                </div>
                <div style="background: rgba(255,107,107,0.1); padding: 20px; border-radius: 10px;">
                    <h4 style="color: #ff6b6b; margin-bottom: 10px;">忌</h4>
                    <p style="line-height: 1.8;">${today.ji}</p>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 20px; background: rgba(220,20,60,0.1); border-radius: 10px;">
                <p><strong>${god}方位：</strong>${direction}</p>
            </div>
        `;
    }

    renderKnowledge() {
        const html = KNOWLEDGE_BASE.map(item => `
            <div class="knowledge-item">
                <h4>${item.title}</h4>
                <p>${item.content}</p>
            </div>
        `).join('');
        document.querySelector('.knowledge-list').innerHTML = html;
    }

    calculateBazhai() {
        const direction = document.getElementById('bazhai-direction').value;
        const data = BAZHAI_DATA[direction];

        const luckyHtml = data.lucky.map(item => `
            <div class="bazhai-result-item lucky">
                <strong>${item.name}</strong><br>
                ${item.direction}<br>
                <small>${item.meaning}</small>
            </div>
        `).join('');

        const unluckyHtml = data.unlucky.map(item => `
            <div class="bazhai-result-item unlucky">
                <strong>${item.name}</strong><br>
                ${item.direction}<br>
                <small>${item.meaning}</small>
            </div>
        `).join('');

        document.getElementById('bazhai-result').innerHTML = `
            <h3 style="color: #dc143c; margin-bottom: 20px;">${data.name}</h3>
            <p style="margin-bottom: 20px;">五行属性：${data.element}</p>
            <h4 style="color: #4ade80; margin-bottom: 15px;">✓ 吉位</h4>
            <div class="bazhai-result-grid">${luckyHtml}</div>
            <h4 style="color: #ff6b6b; margin: 20px 0 15px 0;">✗ 凶位</h4>
            <div class="bazhai-result-grid">${unluckyHtml}</div>
            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;">
                <p><strong>建议：</strong>吉位宜设置卧室、客厅、厨房等重要房间，凶位宜设卫生间、储物间等，或用五行化煞物品化解。</p>
            </div>
        `;
    }

    renderShanshanGrid() {
        const html = SHANSHAN_DATA.map((item, index) => `
            <div class="shanshan-item" data-index="${index}">
                ${item.name}
            </div>
        `).join('');
        document.getElementById('shanshan-grid').innerHTML = html;

        document.querySelectorAll('.shanshan-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.shanshan-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                this.renderShanshanDetail(parseInt(item.dataset.index));
            });
        });

        this.renderShanshanDetail(0);
    }

    renderShanshanDetail(index) {
        const item = SHANSHAN_DATA[index];
        document.getElementById('shanshan-detail').innerHTML = `
            <h3 style="color: #dc143c; margin-bottom: 20px;">${item.name}</h3>
            <p style="margin-bottom: 10px;"><strong>方位度数：</strong>${item.degree}°</p>
            <p style="margin-bottom: 10px;"><strong>五行属性：</strong>${item.element}</p>
            <p style="color: #b0b0b0; line-height: 1.8;">${item.meaning}</p>
            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;">
                <p>二十四山向是风水罗盘的重要组成部分，每山15度，配合三元九运判断吉凶。选择适合的山向，结合宅主命理，可获得最佳风水效果。</p>
            </div>
        `;
    }

    renderMascotsContent(tab) {
        const mascots = MASCOTS_DATA[tab];
        const html = `
            <div class="mascot-grid">
                ${mascots.map(item => `
                    <div class="mascot-card">
                        <div class="mascot-icon">${item.icon}</div>
                        <h4>${item.name}</h4>
                        <p>${item.meaning}</p>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('mascots-content').innerHTML = html;
    }

    // 每日运势功能
    initFortune() {
        const today = new Date();
        const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
        const dateEl = document.getElementById('fortune-date');
        if (dateEl) dateEl.textContent = dateStr;
        
        // 随机生成运势分数
        const score = Math.floor(Math.random() * 40) + 60; // 60-99分
        const scoreEl = document.getElementById('fortune-score');
        if (scoreEl) scoreEl.textContent = score;
        
        const fortuneDesc = score >= 85 ? '今日运势大吉' : score >= 70 ? '今日运势平顺' : '今日运势一般';
        const descEl = document.getElementById('fortune-desc');
        if (descEl) descEl.textContent = fortuneDesc;
        
        // 动态设置五行分数条
        const fillElements = document.querySelectorAll('.element-fill');
        const scoreElements = document.querySelectorAll('.element-score');
        fillElements.forEach((el, i) => {
            const elemScore = Math.floor(Math.random() * 40) + 60;
            el.style.width = `${elemScore}%`;
            if (scoreElements[i]) scoreElements[i].textContent = `${elemScore}%`;
        });
        
        // VIP解锁按钮
        const unlockBtn = document.getElementById('fortune-unlock-btn');
        if (unlockBtn) {
            unlockBtn.addEventListener('click', () => {
                this.showVipModal();
            });
        }
    }

    // 八字合婚功能
    initHehun() {
        document.getElementById('hehun-vip-btn').addEventListener('click', () => {
            this.showVipModal();
        });
        
        document.getElementById('calc-hehun').addEventListener('click', () => {
            this.calculateHehun();
        });
    }

    calculateHehun() {
        const maleName = document.getElementById('hehun-name-male').value;
        const femaleName = document.getElementById('hehun-name-female').value;
        
        if (!maleName || !femaleName) {
            alert('请填写双方姓名');
            return;
        }
        
        // 随机生成合婚分数
        const score = Math.floor(Math.random() * 40) + 60;
        
        const resultHtml = `
            <div class="hehun-result">
                <h3>八字合婚结果</h3>
                <div class="hehun-score">
                    <div class="score-circle">
                        <span class="score-num">${score}</span>
                        <span class="score-label">分</span>
                    </div>
                    <p class="score-text">${score >= 85 ? '天作之合' : score >= 70 ? '美满良缘' : '需要磨合'}</p>
                </div>
                <div class="hehun-detail">
                    <h4>综合分析</h4>
                    <p>${maleName}与${femaleName}的八字契合度${score >= 70 ? '较高' : '一般'}，${score >= 85 ? '是非常理想的姻缘' : '需要双方互相理解包容'}。</p>
                    <h4>建议</h4>
                    <p>在日常生活中要多沟通，互相体谅对方，共同经营好这段感情。</p>
                </div>
            </div>
        `;
        
        document.getElementById('hehun-result').innerHTML = resultHtml;
        
        // 更新统计
        if (this.userData.isLoggedIn) {
            this.userData.stats.hehun++;
            this.saveUserData();
            this.updateProfileStats();
        }
    }

    // 商城功能
    initShop() {
        this.renderShopGrid('all');
        
        // 分类标签
        document.querySelectorAll('[data-shop-tab]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-shop-tab]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.dataset.shopTab;
                this.renderShopGrid(tab);
            });
        });
        
        // 搜索功能
        document.getElementById('shop-search').addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            this.filterShopItems(keyword);
        });
    }

    renderShopGrid(category) {
        const shopItems = this.getShopItems();
        let filtered = category === 'all' ? shopItems : shopItems.filter(item => item.category === category);
        
        const html = filtered.map(item => `
            <div class="shop-item">
                <div class="shop-item-image">${item.icon}</div>
                <div class="shop-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                    <div class="shop-item-price">
                        <span class="price">¥${item.price}</span>
                        <span class="shop-item-tag">${item.tag}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('shop-grid').innerHTML = html;
    }

    filterShopItems(keyword) {
        const shopItems = this.getShopItems();
        let filtered = shopItems.filter(item => 
            item.name.toLowerCase().includes(keyword) || item.desc.toLowerCase().includes(keyword));
        
        const html = filtered.map(item => `
            <div class="shop-item">
                <div class="shop-item-image">${item.icon}</div>
                <div class="shop-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                    <div class="shop-item-price">
                        <span class="price">¥${item.price}</span>
                        <span class="shop-item-tag">${item.tag}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('shop-grid').innerHTML = html;
    }

    getShopItems() {
        return [
            { icon: '🐲', name: '开光龙龟摆件', desc: '招财化煞，镇宅保平安', price: 298, tag: '热卖', category: 'wealth' },
            { icon: '🦋', name: '粉水晶七星阵', desc: '旺桃花，助姻缘', price: 198, tag: '新品', category: 'love' },
            { icon: '📚', name: '文昌塔', desc: '助学业事业，步步高升', price: 168, tag: '推荐', category: 'career' },
            { icon: '🍑', name: '寿桃摆件', desc: '健康长寿，福寿双全', price: 258, tag: '精选', category: 'health' },
            { icon: '💰', name: '五帝钱', desc: '化煞辟邪，旺财转运', price: 88, tag: '特惠', category: 'wealth' },
            { icon: '🪷', name: '葫芦挂件', desc: '保健康，化病灾', price: 68, tag: '热销', category: 'health' },
            { icon: '🐴', name: '马到成功', desc: '事业顺利，马到成功', price: 268, tag: '新品', category: 'career' },
            { icon: '🦢', name: '鸳鸯戏水', desc: '夫妻和睦，百年好合', price: 228, tag: '推荐', category: 'love' }
        ];
    }

    // 用户系统
    initAuth() {
        try {
            this.loadUserData();
            
            // 安全辅助函数
            const safeBind = (id, handler) => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('click', handler);
            };
            
            // 安全查询选择器
            const safeQueryAll = (selector) => {
                try {
                    return document.querySelectorAll(selector);
                } catch (e) {
                    return [];
                }
            };
            
            // 首页VIP按钮（如果存在）
            safeBind('home-vip-btn', () => this.showVipModal());
            
            // 登录/注册切换
            safeQueryAll('.auth-tab').forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        safeQueryAll('.auth-tab').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        const type = btn.dataset.auth;
                        const loginForm = document.getElementById('login-form');
                        const registerForm = document.getElementById('register-form');
                        
                        if (loginForm && registerForm) {
                            if (type === 'login') {
                                loginForm.classList.remove('hidden');
                                registerForm.classList.add('hidden');
                            } else {
                                loginForm.classList.add('hidden');
                                registerForm.classList.remove('hidden');
                            }
                        }
                    } catch (e) {
                        console.error('切换登录/注册出错:', e);
                    }
                });
            });
            
            safeQueryAll('.switch-auth').forEach(el => {
                el.addEventListener('click', () => {
                    try {
                        const loginForm = document.getElementById('login-form');
                        const registerForm = document.getElementById('register-form');
                        const tabs = safeQueryAll('.auth-tab');
                        
                        if (loginForm && registerForm && tabs.length >= 2) {
                            const isLogin = !loginForm.classList.contains('hidden');
                            if (isLogin) {
                                tabs[0].classList.remove('active');
                                tabs[1].classList.add('active');
                                loginForm.classList.add('hidden');
                                registerForm.classList.remove('hidden');
                            } else {
                                tabs[0].classList.add('active');
                                tabs[1].classList.remove('active');
                                loginForm.classList.remove('hidden');
                                registerForm.classList.add('hidden');
                            }
                        }
                    } catch (e) {
                        console.error('切换表单出错:', e);
                    }
                });
            });
            
            // 登录按钮
            safeBind('login-btn', () => this.handleLogin());
            
            // 注册按钮
            safeBind('register-btn', () => this.handleRegister());
            
            // 关闭弹窗
            safeBind('auth-close', () => this.hideAuthModal());
            safeBind('vip-close', () => this.hideVipModal());
            
            // 广告关闭（如果存在）
            safeBind('ad-close', () => {
                const ad = document.getElementById('banner-ad');
                if (ad) ad.style.display = 'none';
            });
            
            // 个人中心按钮
            safeBind('profile-login-btn', () => this.showAuthModal());
            
            // 退出登录
            safeBind('menu-logout', () => this.handleLogout());
            
            // 会员菜单
            safeBind('menu-vip', () => this.showVipModal());
            
            // 关闭弹窗点击外部
            safeQueryAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.add('hidden');
                    }
                });
            });
            
            // 升级VIP按钮
            safeQueryAll('.vip-plan .btn-vip').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    try {
                        const plan = e.target.closest('.vip-plan')?.dataset.plan;
                        if (plan) this.purchaseVip(plan);
                    } catch (e) {
                        console.error('购买VIP出错:', e);
                    }
                });
            });
            
            this.updateUI();
        } catch (error) {
            console.error('初始化用户系统出错:', error);
        }
    }

    showAuthModal() {
        try {
            const modal = document.getElementById('auth-modal');
            if (modal) modal.classList.remove('hidden');
        } catch (e) {
            console.error('显示登录弹窗出错:', e);
        }
    }

    hideAuthModal() {
        try {
            const modal = document.getElementById('auth-modal');
            if (modal) modal.classList.add('hidden');
        } catch (e) {
            console.error('隐藏登录弹窗出错:', e);
        }
    }

    showVipModal() {
        try {
            const modal = document.getElementById('vip-modal');
            if (modal) modal.classList.remove('hidden');
        } catch (e) {
            console.error('显示VIP弹窗出错:', e);
        }
    }

    hideVipModal() {
        try {
            const modal = document.getElementById('vip-modal');
            if (modal) modal.classList.add('hidden');
        } catch (e) {
            console.error('隐藏VIP弹窗出错:', e);
        }
    }

    showToast(message, duration = 2000) {
        // 创建一个简单的toast提示，替代alert，不会阻塞
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            z-index: 10000;
            font-size: 16px;
            text-align: center;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, duration);
    }

    handleLogin() {
        try {
            const accountInput = document.getElementById('login-account');
            const passwordInput = document.getElementById('login-password');
            
            const account = accountInput?.value || '';
            const password = passwordInput?.value || '';
            
            if (!account || !password) {
                this.showToast('请填写完整信息');
                return;
            }
            
            // 模拟登录
            this.userData.isLoggedIn = true;
            this.userData.name = account;
            this.saveUserData();
            this.hideAuthModal();
            this.updateUI();
            this.showToast('登录成功！');
        } catch (error) {
            console.error('登录出错:', error);
            this.showToast('登录出错，请重试');
        }
    }

    handleRegister() {
        try {
            const phoneInput = document.getElementById('register-phone');
            const passwordInput = document.getElementById('register-password');
            const confirmInput = document.getElementById('register-confirm');
            
            const phone = phoneInput?.value || '';
            const password = passwordInput?.value || '';
            const confirm = confirmInput?.value || '';
            
            if (!phone || !password) {
                this.showToast('请填写完整信息');
                return;
            }
            
            if (password !== confirm) {
                this.showToast('两次密码不一致');
                return;
            }
            
            if (password.length < 6) {
                this.showToast('密码至少6位');
                return;
            }
            
            // 模拟注册
            this.userData.isLoggedIn = true;
            this.userData.name = phone;
            this.saveUserData();
            this.hideAuthModal();
            this.updateUI();
            this.showToast('注册成功！');
        } catch (error) {
            console.error('注册出错:', error);
            this.showToast('注册出错，请重试');
        }
    }

    handleLogout() {
        try {
            if (confirm('确定要退出登录吗？')) {
                this.userData.isLoggedIn = false;
                this.userData.name = '';
                this.saveUserData();
                this.updateUI();
            }
        } catch (error) {
            console.error('退出登录出错:', error);
        }
    }

    purchaseVip(plan) {
        try {
            const prices = { month: 19, quarter: 49, year: 158 };
            const durations = { month: 30, quarter: 90, year: 365 };
            
            const planName = plan === 'month' ? '月度' : plan === 'quarter' ? '季度' : '年度';
            if (confirm(`确定要购买${planName}会员吗？价格¥${prices[plan]}`)) {
                this.userData.isVip = true;
                const expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + durations[plan]);
                this.userData.vipExpire = expireDate.toISOString();
                this.saveUserData();
                this.hideVipModal();
                this.updateUI();
                this.showToast('VIP开通成功！');
            }
        } catch (error) {
            console.error('购买VIP出错:', error);
            this.showToast('购买出错，请重试');
        }
    }

    updateUI() {
        // 更新个人中心
        if (this.userData.isLoggedIn) {
            document.getElementById('profile-name').textContent = this.userData.name;
            document.getElementById('profile-status').textContent = this.userData.isVip ? 'VIP会员' : '普通用户';
            document.getElementById('profile-login-btn').style.display = 'none';
            
            if (this.userData.isVip) {
                document.getElementById('vip-status').classList.remove('hidden');
                const expireDate = new Date(this.userData.vipExpire);
                document.getElementById('vip-expire').textContent = `到期: ${expireDate.toLocaleDateString()}`;
                
                // VIP用户显示合婚内容
                const hehunPremium = document.getElementById('hehun-premium');
                const hehunContent = document.getElementById('hehun-content');
                if (hehunPremium) hehunPremium.classList.add('hidden');
                if (hehunContent) hehunContent.classList.remove('hidden');
                
                // 隐藏VIP解锁提示
                const fortuneUnlock = document.getElementById('fortune-unlock');
                const fortuneBlur = document.getElementById('fortune-blur');
                if (fortuneUnlock) fortuneUnlock.classList.add('hidden');
                if (fortuneBlur) fortuneBlur.style.webkitMaskImage = 'none';
            }
            
            this.updateProfileStats();
        } else {
            document.getElementById('profile-name').textContent = '未登录';
            document.getElementById('profile-status').textContent = '点击登录解锁更多功能';
            document.getElementById('profile-login-btn').style.display = 'block';
            document.getElementById('vip-status').classList.add('hidden');
        }
    }

    updateProfileStats() {
        document.getElementById('stat-bazi').textContent = this.userData.stats.bazi;
        document.getElementById('stat-hehun').textContent = this.userData.stats.hehun;
        document.getElementById('stat-fortune').textContent = this.userData.stats.fortune;
    }

    loadUserData() {
        const saved = localStorage.getItem('fengshuiUser');
        if (saved) {
            this.userData = JSON.parse(saved);
        }
    }

    saveUserData() {
        localStorage.setItem('fengshuiUser', JSON.stringify(this.userData));
    }
}

// 扩展原有功能，增加VIP检查
const originalCalcBazi = FengShuiApp.prototype.calculateBazi;
FengShuiApp.prototype.calculateBazi = function() {
    originalCalcBazi.call(this);
    
    if (this.userData.isLoggedIn) {
        this.userData.stats.bazi++;
        this.saveUserData();
        this.updateProfileStats();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    new FengShuiApp();
});
