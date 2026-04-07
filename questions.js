// 国家安全教育知识问答题库

const questions = [
    {
        id: 1,
        question: "每年（）是全民国家安全教育日。",
        options: [
            "A. 4 月 15 日",
            "B. 5 月 12 日",
            "C. 6 月 6 日",
            "D. 12 月 4 日",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 2,
        question: "全民国家安全教育日自（）年开始设立。",
        options: [
            "A. 2014",
            "B. 2015",
            "C. 2016",
            "D. 2017",
        ],
        correctAnswer: "C",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 3,
        question: "总体国家安全观以（）为宗旨。",
        options: [
            "A. 政治安全",
            "B. 人民安全",
            "C. 经济安全",
            "D. 军事安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 4,
        question: "总体国家安全观以（）为根本。",
        options: [
            "A. 人民安全",
            "B. 政治安全",
            "C. 文化安全",
            "D. 社会安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 5,
        question: "总体国家安全观以（）为基础。",
        options: [
            "A. 军事安全",
            "B. 经济安全",
            "C. 科技安全",
            "D. 网络安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 6,
        question: "总体国家安全观以（）为保障。",
        options: [
            "A. 军事、文化、社会安全",
            "B. 经济安全",
            "C. 生态安全",
            "D. 科技安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 7,
        question: "总体国家安全观以（）为依托。",
        options: [
            "A. 促进国际安全",
            "B. 加强国防建设",
            "C. 发展经济",
            "D. 科技创新",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 8,
        question: "维护国家安全，应当遵守（）和法律。",
        options: [
            "A. 校规校纪",
            "B. 宪法",
            "C. 道德规范",
            "D. 行业规定",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 9,
        question: "任何个人和组织不得有危害（）的行为。",
        options: [
            "A. 集体利益",
            "B. 国家安全",
            "C. 单位利益",
            "D. 公共财产",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 10,
        question: "发现危害国家安全的线索，应拨打举报电话（）。",
        options: [
            "A. 110",
            "B. 12339",
            "C. 12345",
            "D. 119",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 11,
        question: "国家安全包括政治安全、军事安全、经济安全、文化安全、社会安全、科技安全、网络安全、生态安全、资源安全、（）等。",
        options: [
            "A. 食品药品安全",
            "B. 核安全",
            "C. 生产安全",
            "D. 交通安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 12,
        question: "维护国家安全是（）的共同责任。",
        options: [
            "A. 国家机关",
            "B. 全社会",
            "C. 军队",
            "D. 警察",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 13,
        question: "大学生在使用网络时，应当自觉维护（）。",
        options: [
            "A. 个人隐私",
            "B. 网络安全与国家安全",
            "C. 网速稳定",
            "D. 账号安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 14,
        question: "遇到境外人员询问敏感信息，正确做法是（）。",
        options: [
            "A. 如实回答",
            "B. 拒绝并及时报告",
            "C. 敷衍回答",
            "D. 转发他人",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 15,
        question: "涉密文件、资料应当（）。",
        options: [
            "A. 随意存放",
            "B. 妥善保管、按规定处理",
            "C. 拍照发朋友圈",
            "D. 借给同学",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 16,
        question: "以下不属于国家安全范畴的是（）。",
        options: [
            "A. 政治安全",
            "B. 网络安全",
            "C. 个人消费安全",
            "D. 生态安全",
        ],
        correctAnswer: "C",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 17,
        question: "任何公民和组织都有（）国家安全的义务。",
        options: [
            "A. 维护",
            "B. 了解",
            "C. 监督",
            "D. 批评",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 18,
        question: "国家加强国家安全新闻宣传和舆论引导，通过多种形式开展国家安全（）活动。",
        options: [
            "A. 娱乐",
            "B. 宣传教育",
            "C. 商业推广",
            "D. 文体",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 19,
        question: "以下行为可能危害国家安全的是（）。",
        options: [
            "A. 正常学习",
            "B. 泄露国家秘密",
            "C. 参加社团活动",
            "D. 锻炼身体",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 20,
        question: "国家健全国家安全体系，完善集中统一、（）的国家安全领导体制。",
        options: [
            "A. 高效权威",
            "B. 分工协作",
            "C. 科学民主",
            "D. 依法运行",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 21,
        question: "国家安全工作应当统筹发展和（）。",
        options: [
            "A. 稳定",
            "B. 安全",
            "C. 改革",
            "D. 创新",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 22,
        question: "国家防范、制止和依法惩治任何叛国、分裂国家、煽动叛乱、颠覆或者煽动颠覆（）的行为。",
        options: [
            "A. 单位",
            "B. 人民民主专政政权",
            "C. 社会组织",
            "D. 企业",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 23,
        question: "网络运营者应当按照（）要求，履行安全保护义务。",
        options: [
            "A. 个人意愿",
            "B. 法律、行政法规",
            "C. 单位规定",
            "D. 行业惯例",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 24,
        question: "以下属于危害网络安全行为的是（）。",
        options: [
            "A. 安装杀毒软件",
            "B. 制作传播计算机病毒",
            "C. 清理缓存",
            "D. 更新系统",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 25,
        question: "对在国家安全工作中作出突出贡献的个人和组织，按照国家有关规定给予（）。",
        options: [
            "A. 批评",
            "B. 表彰和奖励",
            "C. 处分",
            "D. 警告",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 26,
        question: "国家健全国家安全（），依法行使国家安全执法权。",
        options: [
            "A. 法律体系",
            "B. 法治保障",
            "C. 机构设置",
            "D. 监督机制",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 27,
        question: "大学生应自觉抵制（），维护国家政治安全。",
        options: [
            "A. 历史虚无主义",
            "B. 传统文化",
            "C. 爱国主义",
            "D. 集体主义",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 28,
        question: "国家加强边防、海防和（）建设，维护国家领土主权。",
        options: [
            "A. 空防",
            "B. 堤防",
            "C. 消防",
            "D. 交通",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 29,
        question: "经济安全是国家安全的（）。",
        options: [
            "A. 根本",
            "B. 基础",
            "C. 保障",
            "D. 宗旨",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 30,
        question: "国家维护和发展（）的根本利益。",
        options: [
            "A. 公民个人",
            "B. 最广大人民",
            "C. 企业",
            "D. 社会组织",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 31,
        question: "国家依法保护公民的（）和其他合法权益。",
        options: [
            "A. 言论自由",
            "B. 人身权利、财产权利",
            "C. 网络言论",
            "D. 就业权利",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 32,
        question: "国家健全国家安全风险监测、（）、应急处置制度。",
        options: [
            "A. 预警",
            "B. 报告",
            "C. 评估",
            "D. 排查",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 33,
        question: "任何个人和组织不得非法持有属于（）的文件、资料和其他物品。",
        options: [
            "A. 个人所有",
            "B. 国家秘密",
            "C. 单位内部",
            "D. 公开出版",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 34,
        question: "以下属于维护生态安全的是（）。",
        options: [
            "A. 随意排放污水",
            "B. 滥砍滥伐",
            "C. 节约资源、保护环境",
            "D. 乱扔垃圾",
        ],
        correctAnswer: "C",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 35,
        question: "国家加强自主创新能力建设，加快发展自主可控的（）。",
        options: [
            "A. 商品服务",
            "B. 战略高科技",
            "C. 日常消费品",
            "D. 娱乐产品",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 36,
        question: "国家维护国家网络空间主权、安全和（）。",
        options: [
            "A. 运行速度",
            "B. 发展利益",
            "C. 访问权限",
            "D. 资源共享",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 37,
        question: "发现网络上有危害国家安全信息，应当（）。",
        options: [
            "A. 转发扩散",
            "B. 及时举报",
            "C. 保存收藏",
            "D. 不予理睬",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 38,
        question: "国家安全机关是（）的主管机关。",
        options: [
            "A. 社会治安",
            "B. 反间谍工作",
            "C. 市场监管",
            "D. 交通管理",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 39,
        question: "公民和组织支持、协助国家安全工作，有权获得（）。",
        options: [
            "A. 相应保护",
            "B. 物质奖励",
            "C. 职务晋升",
            "D. 荣誉称号",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 40,
        question: "国家加强国家安全（）建设，增强全民国家安全意识。",
        options: [
            "A. 基础设施",
            "B. 宣传教育",
            "C. 装备器材",
            "D. 专业队伍",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 41,
        question: "国家依法取缔邪教组织，防范、制止和依法惩治邪教（）活动。",
        options: [
            "A. 健身",
            "B. 违法犯罪",
            "C. 交流",
            "D. 宣传",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 42,
        question: "维护社会安全，应当预防和减少（），保持社会稳定。",
        options: [
            "A. 违法犯罪",
            "B. 经济活动",
            "C. 人口流动",
            "D. 公共服务",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 43,
        question: "国家保障关系国民经济命脉的（）和关键领域安全。",
        options: [
            "A. 中小企业",
            "B. 重要行业",
            "C. 个体工商户",
            "D. 服务业",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 44,
        question: "国家健全金融宏观审慎管理和金融风险防范、处置机制，维护（）。",
        options: [
            "A. 金融安全",
            "B. 个人财产",
            "C. 股市稳定",
            "D. 汇率稳定",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 45,
        question: "国家保护（），维护粮食安全。",
        options: [
            "A. 耕地资源",
            "B. 矿产资源",
            "C. 森林资源",
            "D. 海洋资源",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 46,
        question: "国家加强核安全监管，防范核恐怖主义，保障（）。",
        options: [
            "A. 能源安全",
            "B. 核安全",
            "C. 生产安全",
            "D. 公共安全",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 47,
        question: "国家维护我国在外层空间、国际海底区域和（）的安全和利益。",
        options: [
            "A. 网络空间",
            "B. 极地",
            "C. 领空",
            "D. 领海",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 48,
        question: "国家采取必要措施，保护海外（）和机构、资产安全。",
        options: [
            "A. 游客",
            "B. 公民",
            "C. 务工人员",
            "D. 留学生",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 49,
        question: "国家安全工作应当坚持（），积极参与全球安全治理。",
        options: [
            "A. 单边主义",
            "B. 多边主义",
            "C. 保护主义",
            "D. 孤立主义",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 50,
        question: "国家推动构建（），维护世界和平与安全。",
        options: [
            "A. 地区联盟",
            "B. 人类命运共同体",
            "C. 经济共同体",
            "D. 军事同盟",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 51,
        question: "以下行为符合国家安全要求的是（）。",
        options: [
            "A. 随意拍摄军事设施并上传网络",
            "B. 保守国家秘密",
            "C. 向境外提供敏感数据",
            "D. 传播虚假信息",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 52,
        question: "国家加强（），维护国家文化安全。",
        options: [
            "A. 传统文化保护",
            "B. 外来文化引进",
            "C. 娱乐产业发展",
            "D. 网络文化传播",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 53,
        question: "国家依法保护（），维护网络空间主权。",
        options: [
            "A. 网络运营商",
            "B. 关键信息基础设施",
            "C. 网民个人信息",
            "D. 网络平台",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 54,
        question: "任何个人和组织使用网络应当遵守（）。",
        options: [
            "A. 个人习惯",
            "B. 宪法法律",
            "C. 平台规则",
            "D. 道德规范",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 55,
        question: "国家加强（），防范生物恐怖、重大生物安全风险。",
        options: [
            "A. 生物安全",
            "B. 食品安全",
            "C. 药品安全",
            "D. 卫生安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 56,
        question: "国家安全事关（）、民族复兴、人民福祉。",
        options: [
            "A. 国家存亡",
            "B. 经济发展",
            "C. 社会进步",
            "D. 文化繁荣",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 57,
        question: "国家健全国家安全体系，坚持（）、人民群众广泛参与。",
        options: [
            "A. 政府主导",
            "B. 市场主导",
            "C. 社会组织主导",
            "D. 媒体主导",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 58,
        question: "国家加强国家安全（），提高国家安全保障能力。",
        options: [
            "A. 法治建设",
            "B. 制度建设",
            "C. 能力建设",
            "D. 队伍建设",
        ],
        correctAnswer: "C",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 59,
        question: "国家依法惩治危害国家安全的（）。",
        options: [
            "A. 违纪行为",
            "B. 违法犯罪行为",
            "C. 不道德行为",
            "D. 违规行为",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 60,
        question: "大学生应树立正确的（），自觉维护国家安全。",
        options: [
            "A. 消费观",
            "B. 国家安全观",
            "C. 娱乐观",
            "D. 学习观",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 61,
        question: "国家加强（），维护我国海洋权益。",
        options: [
            "A. 海洋安全",
            "B. 内河安全",
            "C. 湖泊安全",
            "D. 水库安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 62,
        question: "国家加强（），防范化解重大自然灾害风险。",
        options: [
            "A. 防灾减灾救灾",
            "B. 应急救援",
            "C. 安全生产",
            "D. 公共卫生",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 63,
        question: "国家维护（），保障人民生命安全和身体健康。",
        options: [
            "A. 公共卫生安全",
            "B. 食品安全",
            "C. 药品安全",
            "D. 医疗安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 64,
        question: "国家加强（），维护我国太空安全和利益。",
        options: [
            "A. 航天安全",
            "B. 航空安全",
            "C. 飞行安全",
            "D. 运输安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 65,
        question: "国家加强（），维护我国人工智能等新技术领域安全。",
        options: [
            "A. 科技安全",
            "B. 信息安全",
            "C. 数据安全",
            "D. 产业安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 66,
        question: "国家加强（），保护个人信息和重要数据安全。",
        options: [
            "A. 数据安全",
            "B. 网络安全",
            "C. 信息安全",
            "D. 隐私安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 67,
        question: "国家加强（），维护我国海外利益安全。",
        options: [
            "A. 海外安全保护",
            "B. 外交保护",
            "C. 领事保护",
            "D. 军事保护",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 68,
        question: "国家安全工作必须坚持党的（）。",
        options: [
            "A. 全面领导",
            "B. 业务指导",
            "C. 监督管理",
            "D. 组织协调",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 69,
        question: "国家健全国家安全（），提高国家安全决策科学化水平。",
        options: [
            "A. 决策机制",
            "B. 执行机制",
            "C. 监督机制",
            "D. 评估机制",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 70,
        question: "国家加强国家安全（），完善国家安全法律制度体系。",
        options: [
            "A. 法治保障",
            "B. 制度保障",
            "C. 组织保障",
            "D. 人才保障",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 71,
        question: "国家加强国家安全（），建设高素质国家安全专业人才队伍。",
        options: [
            "A. 人才培养",
            "B. 队伍建设",
            "C. 教育培训",
            "D. 能力提升",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 72,
        question: "国家加强国家安全（），提高全民国家安全法治意识。",
        options: [
            "A. 法治宣传",
            "B. 普法教育",
            "C. 法律普及",
            "D. 法治培训",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 73,
        question: "国家加强国家安全（），营造维护国家安全的良好氛围。",
        options: [
            "A. 舆论引导",
            "B. 宣传报道",
            "C. 媒体宣传",
            "D. 社会动员",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 74,
        question: "国家加强国家安全（），推动全社会形成维护国家安全强大合力。",
        options: [
            "A. 社会动员",
            "B. 群众工作",
            "C. 宣传教育",
            "D. 组织发动",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 75,
        question: "任何个人和组织都不得（）国家安全机关的工作。",
        options: [
            "A. 支持",
            "B. 阻碍",
            "C. 配合",
            "D. 协助",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 76,
        question: "国家安全机关工作人员依法执行任务受（）。",
        options: [
            "A. 批评",
            "B. 法律保护",
            "C. 监督",
            "D. 限制",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 77,
        question: "国家对在维护国家安全工作中（）的个人和组织给予表彰和奖励。",
        options: [
            "A. 作出突出贡献",
            "B. 积极参与",
            "C. 主动配合",
            "D. 认真学习",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 78,
        question: "违反国家安全相关法律，构成犯罪的，依法追究（）。",
        options: [
            "A. 行政责任",
            "B. 刑事责任",
            "C. 民事责任",
            "D. 纪律责任",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 79,
        question: "国家加强（），维护我国能源资源安全。",
        options: [
            "A. 资源安全",
            "B. 能源安全",
            "C. 矿产安全",
            "D. 战略资源安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 80,
        question: "国家加强（），维护我国人工智能、大数据等领域安全。",
        options: [
            "A. 新兴领域安全",
            "B. 传统领域安全",
            "C. 重点领域安全",
            "D. 关键领域安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 81,
        question: "国家加强（），防范化解重大风险挑战。",
        options: [
            "A. 风险防控",
            "B. 隐患排查",
            "C. 应急处置",
            "D. 预警监测",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 82,
        question: "国家安全是（）的重要基石。",
        options: [
            "A. 安邦定国",
            "B. 经济发展",
            "C. 社会稳定",
            "D. 民族复兴",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 83,
        question: "维护国家安全，是全国各族人民（）所在。",
        options: [
            "A. 根本利益",
            "B. 切身利益",
            "C. 共同利益",
            "D. 长远利益",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 84,
        question: "国家坚持（），统筹外部安全和内部安全。",
        options: [
            "A. 总体国家安全观",
            "B. 安全发展理念",
            "C. 国家安全战略",
            "D. 国家安全政策",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 85,
        question: "国家坚持统筹（）、国土安全和国民安全。",
        options: [
            "A. 传统安全和非传统安全",
            "B. 自身安全和共同安全",
            "C. 政治安全和经济安全",
            "D. 军事安全和社会安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 86,
        question: "国家坚持统筹（）、发展问题和安全问题。",
        options: [
            "A. 安全和发展",
            "B. 改革和稳定",
            "C. 开放和自主",
            "D. 内部和外部",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 87,
        question: "国家加强（），提高国家安全保障能力和水平。",
        options: [
            "A. 国家安全能力建设",
            "B. 国家安全制度建设",
            "C. 国家安全法治建设",
            "D. 国家安全队伍建设",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 88,
        question: "国家健全国家安全（），完善国家安全制度体系。",
        options: [
            "A. 制度体系",
            "B. 法律体系",
            "C. 组织体系",
            "D. 保障体系",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 89,
        question: "国家加强（），维护我国网络空间安全和发展利益。",
        options: [
            "A. 网络安全保障",
            "B. 网络治理",
            "C. 网络监管",
            "D. 网络防护",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 90,
        question: "国家加强（），维护我国关键信息基础设施安全。",
        options: [
            "A. 关键信息基础设施保护",
            "B. 网络安全防护",
            "C. 信息安全保护",
            "D. 数据安全保护",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 91,
        question: "国家加强（），维护我国数据安全和个人信息安全。",
        options: [
            "A. 数据安全保护",
            "B. 信息安全保护",
            "C. 隐私保护",
            "D. 网络安全保护",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 92,
        question: "国家加强（），维护我国生物安全和公共卫生安全。",
        options: [
            "A. 生物安全保障",
            "B. 公共卫生保障",
            "C. 卫生安全保障",
            "D. 防疫安全保障",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 93,
        question: "国家加强（），维护我国海外公民和机构安全。",
        options: [
            "A. 海外利益保护",
            "B. 领事保护",
            "C. 外交保护",
            "D. 安全保护",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 94,
        question: "国家加强（），维护我国极地、深海、太空等新疆域安全。",
        options: [
            "A. 新疆域安全",
            "B. 新兴领域安全",
            "C. 战略领域安全",
            "D. 重点领域安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 95,
        question: "国家推动树立（），倡导共同、综合、合作、可持续的安全观。",
        options: [
            "A. 共同安全理念",
            "B. 全球安全观",
            "C. 人类安全观",
            "D. 普遍安全观",
        ],
        correctAnswer: "B",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 96,
        question: "国家加强（），维护我国周边安全和地区稳定。",
        options: [
            "A. 周边安全",
            "B. 地区安全",
            "C. 区域安全",
            "D. 边境安全",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 97,
        question: "国家加强（），维护我国国际形象和国际话语权。",
        options: [
            "A. 国际传播能力",
            "B. 对外宣传",
            "C. 国际舆论",
            "D. 国际形象",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 98,
        question: "国家加强（），提高防范抵御国家安全风险能力。",
        options: [
            "A. 国家安全风险防范",
            "B. 国家安全预警",
            "C. 国家安全监测",
            "D. 国家安全应急",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 99,
        question: "大学生应主动学习国家安全知识，增强（）。",
        options: [
            "A. 国家安全意识",
            "B. 自我保护意识",
            "C. 法律意识",
            "D. 责任意识",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    },
    {
        id: 100,
        question: "维护国家安全，人人（），人人可为。",
        options: [
            "A. 有责",
            "B. 负责",
            "C. 尽责",
            "D. 担责",
        ],
        correctAnswer: "A",
        analysis: "本题考查国家安全相关知识。"
    }
];

// 导出题目数据
if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
}
