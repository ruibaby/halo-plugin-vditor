vditorRender.addExternal((conf) => {
    document.querySelectorAll(".language-halo").forEach(el => {
        console.log(el.parentElement)
        // TODO: Vditor未对getHTML的代码进行处理
        el.parentElement.outerHTML = HaloJs.renderHalo(
                el.textContent,
                "/plugins/vditor-mde/assets/static/halo-renders"
        );
    })
})