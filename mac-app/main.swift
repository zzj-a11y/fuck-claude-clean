import Cocoa
import WebKit

final class App: NSObject, NSApplicationDelegate, WKNavigationDelegate, WKUIDelegate, WKDownloadDelegate, NSWindowDelegate {
    var window: NSWindow!
    var web: WKWebView!
    var home: URL!
    var downloads: [ObjectIdentifier: WKDownload] = [:]
    func applicationDidFinishLaunching(_ notification: Notification) {
        guard let text = Bundle.main.object(forInfoDictionaryKey: "WebsiteURL") as? String, let url = URL(string: text), url.scheme == "https" || url.host == "localhost" else { NSApp.terminate(nil); return }
        home = url
        window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1050, height: 760), styleMask: [.titled,.closable,.miniaturizable,.resizable], backing: .buffered, defer: false)
        window.title = "Claude 环境检测"; window.center(); window.setFrameAutosaveName("ClaudeEnvironmentWindow"); window.delegate = self
        let bar = NSStackView(); bar.orientation = .horizontal; bar.spacing = 8; bar.translatesAutoresizingMaskIntoConstraints = false
        for (title, action) in [("‹", #selector(back)), ("›", #selector(forward)), ("刷新", #selector(reload)), ("在浏览器打开", #selector(openBrowser))] { let b = NSButton(title: title, target: self, action: action); bar.addArrangedSubview(b) }
        web = WKWebView(); web.navigationDelegate = self; web.uiDelegate = self; web.translatesAutoresizingMaskIntoConstraints = false
        let content = NSView(); content.addSubview(bar); content.addSubview(web); window.contentView = content
        NSLayoutConstraint.activate([bar.leadingAnchor.constraint(equalTo: content.leadingAnchor, constant: 12), bar.topAnchor.constraint(equalTo: content.topAnchor, constant: 8), web.topAnchor.constraint(equalTo: bar.bottomAnchor, constant: 8), web.leadingAnchor.constraint(equalTo: content.leadingAnchor), web.trailingAnchor.constraint(equalTo: content.trailingAnchor), web.bottomAnchor.constraint(equalTo: content.bottomAnchor)])
        web.load(URLRequest(url: url)); window.makeKeyAndOrderFront(nil); NSApp.activate(ignoringOtherApps: true)
    }
    @objc func back() { web.goBack() }
    @objc func forward() { web.goForward() }
    @objc func reload() { if web.url == nil { web.load(URLRequest(url: home)) } else { web.reload() } }
    @objc func openBrowser() { NSWorkspace.shared.open(web.url ?? home) }
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }
    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if action.shouldPerformDownload { decisionHandler(.download); return }
        if let url = action.request.url, let host = url.host, host != home.host, ["https", "http"].contains(url.scheme ?? "") { NSWorkspace.shared.open(url); decisionHandler(.cancel); return }
        if action.targetFrame == nil, let url = action.request.url { webView.load(URLRequest(url: url)); decisionHandler(.cancel); return }
        decisionHandler(.allow)
    }
    func webView(_ webView: WKWebView, navigationAction: WKNavigationAction, didBecome download: WKDownload) { downloads[ObjectIdentifier(download)] = download; download.delegate = self }
    func webView(_ webView: WKWebView, navigationResponse: WKNavigationResponse, didBecome download: WKDownload) { downloads[ObjectIdentifier(download)] = download; download.delegate = self }
    func download(_ download: WKDownload, decideDestinationUsing response: URLResponse, suggestedFilename: String, completionHandler: @escaping (URL?) -> Void) { let panel = NSSavePanel(); panel.nameFieldStringValue = suggestedFilename; panel.begin { result in completionHandler(result == .OK ? panel.url : nil) } }
    func downloadDidFinish(_ download: WKDownload) { downloads.removeValue(forKey: ObjectIdentifier(download)) }
    func download(_ download: WKDownload, didFailWithError error: Error, resumeData: Data?) { downloads.removeValue(forKey: ObjectIdentifier(download)); let alert = NSAlert(error: error); alert.runModal() }
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) { let alert = NSAlert(); alert.messageText = "无法打开网站"; alert.informativeText = "请检查网络连接，然后点击刷新重试。\n\(error.localizedDescription)"; alert.runModal() }
}
let app = NSApplication.shared
let delegate = App()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.run()
