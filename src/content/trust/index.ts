
export type TrustPageId = 'privacy' | 'about' | 'contact' | 'terms';

export const TRUST_CONTENT: Record<TrustPageId, { en: string; zh: string }> = {
  privacy: {
    en: `<h2>Privacy</h2><p>Browser scan results are calculated locally. This site does not load advertising or analytics scripts. WebRTC testing may contact a public STUN server. The optional API processes request headers and IP-derived location on Vercel.</p>`,
    zh: `<h2>隐私说明</h2><p>浏览器中的检测结果在本地计算。本站不加载广告或访问统计脚本。WebRTC 检测可能连接公共 STUN 服务器；可选的 API 会在 Vercel 上处理请求头和 IP 推算的地区信息。</p>`,
  },
  about: {
    en: `<h2>About this site</h2><p>This is an independent adaptation of <a href="https://github.com/LinXiaoTao/FuckClaude">LinXiaoTao/FuckClaude</a>, distributed under its MIT license. The guides and news are snapshots of the upstream project. The score is a heuristic, not a prediction of account suspension, and the project is not affiliated with Anthropic.</p>`,
    zh: `<h2>关于本站</h2><p>本站是 <a href="https://github.com/LinXiaoTao/FuckClaude">LinXiaoTao/FuckClaude</a> 的独立修改版，保留原项目 MIT 许可证。资讯和指南是上游版本的内容快照。分数是项目自行定义的估算，不能预测账号是否被封；本站与 Anthropic 无关联。</p>`,
  },
  contact: {
    en: `<h2>Contact</h2><p>For feedback on this independent deployment, visit <a href="https://github.com/zzj-a11y/fuck-claude-clean/issues">GitHub Issues</a>.</p>`,
    zh: `<h2>联系方式</h2><p>对这个独立部署版本的反馈请提交至 <a href="https://github.com/zzj-a11y/fuck-claude-clean/issues">GitHub Issues</a>。</p>`,
  },
  terms: {
    en: `
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using <strong>Fuck Claude</strong> (the "Website", "Service", or "Tool"), you agree to be bound by these Terms of Service ("Terms") and our <a href="/privacy/">Privacy Policy</a>. If you do not agree to these Terms, please discontinue using the Service immediately.</p>

<h2>2. Educational & Research Purpose</h2>
<p>Fuck Claude is an independent open-source educational and technical research tool. All tools, risk calculators, fingerprint scanners, and knowledge base articles are published strictly for educational, security auditing, and technical research purposes. Nothing on this website constitutes legal, financial, or commercial advice.</p>

<h2>3. User Responsibility & Compliance</h2>
<p>You acknowledge and agree that:</p>
<ul>
  <li>You are solely responsible for how you configure your local devices, networks, operating systems, and developer environments.</li>
  <li>You remain solely responsible for your use of third-party AI services (including Anthropic's Claude, Claude Code, and Claude API) and for complying with their applicable Terms of Service, Acceptable Use Policies, and your local laws.</li>
  <li>Fuck Claude does not guarantee that following any checklist or guide will prevent account suspension, rate-limiting, or administrative action by third-party service providers.</li>
</ul>

<h2>4. Disclaimer of Warranties</h2>
<p>THE SERVICE AND ALL CONTENT, SCANNERS, ARTICLES, AND SCRIPTS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.</p>

<h2>5. Limitation of Liability</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE AUTHORS, MAINTAINERS, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, ACCOUNT SUSPENSION, OR SERVICE DISRUPTION, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE OR GUIDES.</p>

<h2>6. Intellectual Property & Open Source Licensing</h2>
<p>The source code of Fuck Claude is licensed under the <strong>MIT License</strong>. You may inspect, modify, and distribute the code in accordance with the MIT License terms, provided that original copyright notices and permission notices are retained.</p>

<h2>7. Third-Party Trademarks & External Links</h2>
<p>All third-party trademarks, service marks, product names, and company names mentioned on this Website (including "Claude", "Anthropic", "Google", "Cloudflare") are the property of their respective owners. Mention of third-party products or services does not imply endorsement, affiliation, or sponsorship. We are not responsible for the content, privacy practices, or availability of external third-party websites linked from our pages.</p>

<h2>8. Advertising & Monetization</h2>
<p>This independent version does not display advertisements.</p>

<h2>9. Modifications to the Terms</h2>
<p>We reserve the right to revise or update these Terms at any time without prior notice. The updated version will be posted directly on this page with the effective date. Your continued use of the Website following any changes constitutes your acceptance of the modified Terms.</p>

<h2>10. Contact Information</h2>
<p>If you have any questions or concerns regarding these Terms, please contact us at <a href="https://github.com/zzj-a11y/fuck-claude-clean/issues">GitHub Issues</a> or visit our <a href="https://github.com/zzj-a11y/fuck-claude-clean/issues" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
`.trim(),
    zh: `
<h2>1. 条款的接受与确认</h2>
<p>欢迎访问并使用 <strong>Fuck Claude</strong>（以下简称“本站”、“服务”或“本工具”）。一旦你访问或使用本站，即表示你已充分阅读、理解并同意受本服务条款（以下简称“本条款”）及本站 <a href="/zh/privacy/">隐私政策</a> 的约束。如果你不同意本条款的任何内容，请立即停止使用本站。</p>

<h2>2. 教育与技术研究性质</h2>
<p>Fuck Claude 是一个独立的开源教育与技术研究项目。本站提供的所有检测工具、风险估算器、指纹扫描脚本及防封知识库文章，仅供技术研究、安全审计与学习参考之用。本站任何内容均不构成法律、财务、合规或商业建议。</p>

<h2>3. 用户责任与合规守则</h2>
<p>你理解并明确同意：</p>
<ul>
  <li>你对自身设备、网络环境、操作系统及开发工具的配置与使用承担全部责任。</li>
  <li>你对使用第三方 AI 服务（包括 Anthropic 的 Claude、Claude Code 及 Claude API）的行为承担全部责任，并承诺遵守相应服务商的服务条款、使用政策及你所在地区的适用法律法规。</li>
  <li>本站无法也不保证遵循任何指南或优化建议能够完全避免第三方平台的限流、封号或风控核查。</li>
</ul>

<h2>4. 免责声明与无担保保证</h2>
<p>本服务以及所有内容、检测工具、指南文章和代码均按“现状”（AS IS）和“现有”（AS AVAILABLE）的基础提供，不附带任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性、准确性及不侵权的保证。我们不保证服务不会中断、无差错或完全排除潜在漏洞。</p>

<h2>5. 责任限制</h2>
<p>在适用法律允许的最大范围内，本站作者、维护者或贡献者在任何情况下均不对因使用或无法使用本站服务、工具或指南而引起的任何间接、附带、特殊、后果性或惩罚性损害（包括但不限于数据丢失、利润损失、账号封禁或业务中断）承担赔偿责任。</p>

<h2>6. 知识产权与开源授权</h2>
<p>Fuck Claude 项目源代码基于 <strong>MIT 开源协议</strong> 发布。你可以在保留原作者版权声明和许可声明的前提下，自由查阅、修改、分发与使用本项目的代码。</p>

<h2>7. 第三方商标与外部链接</h2>
<p>本站提及的所有第三方商标、服务标志、产品名称和公司名称（包括但不限于 "Claude"、"Anthropic"、"Google"、"Cloudflare" 等）均为其各自所有者的财产。提及这些商标仅用于描述与技术指代，不代表任何隶属、认可、赞助或官方合作关系。对于本站链接的第三方外部网站内容与隐私实践，本站概不负责。</p>



<h2>9. 条款修改与终止</h2>
<p>我们保留随时修订或更新本服务条款的权利。更新后的条款将直接发布于本页面。你在条款更新后继续使用本站，即视为接受修订后的条款。</p>

<h2>10. 联系与反馈</h2>
<p>如对本条款有任何疑问，请通过电子邮件联系我们：<a href="https://github.com/zzj-a11y/fuck-claude-clean/issues">GitHub Issues</a>，或在 <a href="https://github.com/zzj-a11y/fuck-claude-clean/issues" target="_blank" rel="noopener noreferrer">GitHub 仓库</a> 提交 Issue。</p>
`.trim(),
  },
};
