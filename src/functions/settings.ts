let settings = {
    agentId: "",
    enabled: false
};

export async function saveSettings(request: Request) {

    const body = await request.json();

    settings.agentId = body.agentId;
    settings.enabled = body.enabled;

    return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
    });
}

export async function getSettings() {

    return new Response(JSON.stringify(settings), {
        headers: { "Content-Type": "application/json" }
    });

}