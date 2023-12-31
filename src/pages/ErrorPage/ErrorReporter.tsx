function report(msg: string, hint: string = ""){
    const errorUrl = new URL(window.location.origin + "/error");
    errorUrl.searchParams.set("errordescr", msg);
    errorUrl.searchParams.set("hint", hint);
    window.location.href = errorUrl.href;
}

export default report;