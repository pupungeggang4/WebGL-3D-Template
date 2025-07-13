const fSource = `#version 300 es
    precision highp float;
    uniform sampler2D u_sampler;
    uniform vec3 u_color;
    uniform int u_mode_render; // 0: HUD, 1: NoTexture, 2: Texture
    in vec2 p_texcoord;
    out vec4 o_color;

    void main() {
        if (u_mode_render == 0 || u_mode_render == 2) {
            o_color = texture(u_sampler, p_texcoord);
        } else {
            o_color = vec4(u_color, 1.0);
        }
    }
`
