/* ============================================================
 *  f.js — LingKong Studio · 凌空工作室 · 开发进度追踪
 *  ============================================================
 *  状态说明：
 *    ✅ "done"      已完成
 *    🔄 "doing"     进行中
 *    ❌ "todo"      未完成 / 未开始
 *    ⏸️  "paused"    暂停 / 搁置
 *
 *  使用方式：在 HTML 中 <script src="f.js"></script> 引入后，
 *  通过全局变量 DEV_PROGRESS 访问所有进度数据。
 *  ============================================================ */

const DEV_PROGRESS = {

    /* ==================== G Lang ==================== */
    "g-lang": {
        name: "G Lang",
        name_cn: "G 语言",
        desc: "基于 C++ 从零实现的自研编程语言",
        status: "doing",           // 整体状态
        repo: "https://github.com/xxy150310git/G-Lang",
        last_update: "2026-04-23",
        progress: 15,              // 整体完成百分比 0~100

        tasks: [
            // ---- 词法分析 ----
            { category: "词法分析 Lexer",  items: [
                { name: "标识符识别",       status: "done"   },
                { name: "关键字识别",       status: "done"   },
                { name: "数字字面量解析",   status: "done"   },
                { name: "字符串字面量解析", status: "doing"  },
                { name: "运算符识别",       status: "done"   },
                { name: "注释跳过（单行/多行）", status: "done" },
            ]},

            // ---- 语法分析 ----
            { category: "语法分析 Parser", items: [
                { name: "抽象语法树 AST 结构定义", status: "todo"  },
                { name: "表达式解析",     status: "done"   },
                { name: "语句解析（赋值/控制流）", status: "done" },
                { name: "函数声明与调用", status: "doing"   },
                { name: "语法错误恢复",   status: "paused"   },
            ]},

            // ---- 语义分析 ----
            { category: "语义分析 Semantic", items: [
                { name: "符号表管理",     status: "todo"   },
                { name: "类型检查",       status: "todo"   },
                { name: "作用域分析",     status: "todo"   },
            ]},

            // ---- 代码生成 ----
            { category: "代码生成 Codegen", items: [
                { name: "中间表示 IR",    status: "todo"   },
                { name: "目标代码生成",   status: "todo"   },
                { name: "优化 Pass",      status: "todo"   },
            ]},

            // ---- 运行时 ----
            { category: "运行时 Runtime", items: [
                { name: "虚拟机 / 解释器", status: "todo"   },
                { name: "内存管理（GC）",  status: "todo"   },
                { name: "标准库",         status: "todo"   },
            ]},

            // ---- 工程 ----
            { category: "工程与文档", items: [
                { name: "README 文档",        status: "doing"   },
                { name: "语言规范文档",       status: "todo"   },
                { name: "测试用例集",         status: "todo"   },
                { name: "CI / 自动化构建",    status: "todo"   },
            ]},
        ]
    },


    /* ==================== OI Card Game ==================== */
    "oi-card-game": {
        name: "OI Card Game",
        name_cn: "OI 卡牌对决",
        desc: "融合算法竞赛元素的策略卡牌对战游戏",
        status: "doing",
        repo: "https://xxy150310git.github.io/OI_game/",
        last_update: "2026-07-08",
        progress: 70,

        tasks: [
            // ---- 核心对局 ----
            { category: "核心对局 Core", items: [
                { name: "回合制流程",         status: "done"   },
                { name: "AC 率计算系统",      status: "done"   },
                { name: "WA / CE / TLE / MLE / RE 机制", status: "done" },
                { name: "胜负判定",           status: "done"   },
                { name: "多难度系统（6 档）",  status: "done"  },
                { name: "2/3/4 人模式",       status: "done"  },
            ]},

            // ---- 卡牌系统 ----
            { category: "卡牌系统 Cards", items: [
                { name: "基础功能牌（板子背诵/段错误/死循环等）", status: "done" },
                { name: "卡牌效果结算逻辑",   status: "done"   },
                { name: "交换手牌机制",       status: "done"   },
                { name: "额外出牌机会",       status: "todo"   },
                { name: "更多卡牌扩展",       status: "doing"  },
                { name: "卡牌平衡性调优",     status: "todo"  },
            ]},

            // ---- 天赋系统 ----
            { category: "天赋系统 Talents", items: [
                { name: "天赋随机分配",       status: "done"   },
                { name: "天赋效果数值生效",   status: "done"   },
                { name: "天赋日志可见性",     status: "done"   },
                { name: "更多天赋种类",       status: "todo"  },
                { name: "天赋平衡性调整",     status: "todo"  },
            ]},

            // ---- AI 系统 ----
            { category: "AI 系统", items: [
                { name: "AI 基础出牌逻辑",    status: "done"   },
                { name: "AI 功能牌合理使用",   status: "done"  },
                { name: "AI 连出策略",        status: "done"   },
                { name: "AI 难度分级",        status: "done"   },
                { name: "AI 心理战 / 欺骗",   status: "todo"   },
            ]},

            // ---- 事件与 UI ----
            { category: "随机事件 Events", items: [
                { name: "随机事件触发（30%概率）", status: "done" },
                { name: "更多随机事件扩展",    status: "doing"  },
            ]},

            { category: "界面与体验 UI/UX", items: [
                { name: "像素风卡牌样式",      status: "done"   },
                { name: "日志系统",           status: "done"   },
                { name: "游戏说明面板",        status: "done"   },
                { name: "手牌点击交互",        status: "done"   },
                { name: "动画与过渡效果",      status: "todo"   },
                { name: "音效系统",           status: "doing"   },
                { name: "移动端适配",         status: "todo"  },
            ]},

            // ---- 工程 ----
            { category: "工程", items: [
                { name: "Bug 修复与测试",      status: "doing"  },
                { name: "代码重构",           status: "todo"   },
                { name: "在线部署（GitHub Pages）", status: "done" },
            ]},
        ]
    },


    /* ==================== Blog ==================== */
    "blog": {
        name: "xxy150310's Blog",
        name_cn: "技术博客",
        desc: "算法学习笔记、项目开发日志、技术总结",
        status: "doing",
        repo: "https://xxy150310git.github.io/",
        last_update: "2026-03-26",
        progress: 80,

        tasks: [
            { category: "功能 Features", items: [
                { name: "首页 / 归档 / 标签",  status: "done"   },
                { name: "评论系统",          status: "todo"   },
                { name: "搜索功能",          status: "todo"   },
                { name: "暗黑模式",          status: "todo"   },
            ]},
        ]
    },


    /* ==================== CCF Simulator ==================== */
    "ccf-simulator": {
        name: "CCF Simulator",
        name_cn: "CCF 模拟器",
        desc: "针对信息学竞赛场景开发的原创竞赛工具",
        status: "todo",
        repo: null,
        last_update: null,
        progress: 0,

        tasks: [
            { category: "需求与设计", items: [
                { name: "功能需求文档",       status: "todo"   },
                { name: "UI / 交互原型",      status: "todo"   },
                { name: "技术选型确定",       status: "todo"   },
            ]},

            { category: "核心功能", items: [
                { name: "模拟考试环境",       status: "todo"   },
                { name: "题目管理与导入",     status: "todo"   },
                { name: "自动评测",          status: "todo"   },
                { name: "成绩统计与分析",     status: "todo"   },
            ]},

            { category: "工程", items: [
                { name: "项目仓库创建",       status: "todo"   },
                { name: "README 与文档",      status: "todo"   },
            ]},
        ]
    },
};


/* ============================================================
 *  工具函数（可选使用）
 *  ============================================================ */

// 状态映射
const STATUS_MAP = {
    "done":   { label: "已完成",  icon: "✅", class: "done"   },
    "doing":  { label: "进行中",  icon: "🔄", class: "doing"  },
    "todo":   { label: "未完成",  icon: "❌", class: "todo"   },
    "paused": { label: "已暂停",  icon: "⏸️", class: "paused" },
};

// 获取项目整体状态
function getProjectStatus(key) {
    const proj = DEV_PROGRESS[key];
    if (!proj) return null;
    return {
        name: proj.name,
        name_cn: proj.name_cn,
        status: STATUS_MAP[proj.status] || null,
        progress: proj.progress,
        last_update: proj.last_update,
    };
}

// 统计某项目各状态数量
function countStatus(key) {
    const proj = DEV_PROGRESS[key];
    if (!proj) return null;
    const counts = { done: 0, doing: 0, todo: 0, paused: 0 };
    proj.tasks.forEach(group => {
        group.items.forEach(item => {
            if (counts[item.status] !== undefined) counts[item.status]++;
        });
    });
    return counts;
}

// 渲染某项目的进度 HTML（返回字符串，可 innerHTML 插入）
function renderProgressHTML(key) {
    const proj = DEV_PROGRESS[key];
    if (!proj) return "<p>项目不存在</p>";

    const counts = countStatus(key);
    const total = counts.done + counts.doing + counts.todo + counts.paused;
    const donePct = Math.round(counts.done / total * 100);

    let html = `<div class="proj-header">`;
    html += `<h3>${proj.name} · ${proj.name_cn}</h3>`;
    html += `<p class="proj-desc">${proj.desc}</p>`;
    html += `<div class="proj-bar"><div class="proj-bar-fill" style="width:${proj.progress}%"></div></div>`;
    html += `<p class="proj-stats">总进度 ${proj.progress}% | ✅${counts.done} 🔄${counts.doing} ❌${counts.todo}</p>`;
    html += `</div>`;

    proj.tasks.forEach(group => {
        html += `<h4 class="task-cat">${group.category}</h4><ul class="task-list">`;
        group.items.forEach(item => {
            const s = STATUS_MAP[item.status] || {};
            html += `<li class="${s.class}">${s.icon || ""} ${item.name}</li>`;
        });
        html += `</ul>`;
    });

    return html;
}

// 控制台快速查看
console.log("%c[LingKong] DEV_PROGRESS loaded", "color:#7aa2f7;font-weight:bold;");
console.log("可用项目 key：", Object.keys(DEV_PROGRESS).join(", "));
console.log("调用 renderProgressHTML('g-lang') 可渲染进度 HTML");
