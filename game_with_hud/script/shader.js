const vSource = `#version 300 es
    uniform int u_mode_v;
    in vec4 a_position;
    in vec4 a_position_hud;
    in vec2 a_texcoord;
    out vec2 p_texcoord;

    void main() {
        gl_Position = a_position;
    }
`

const fSource = `#version 300 es
    precision highp float;
    uniform sampler2D u_sampler;
    uniform vec4 u_color;
    uniform int u_mode_f;
    in vec2 p_texcoord;
    out vec4 o_color;

    void main() {
        o_color = vec4(1.0, 1.0, 1.0, 1.0);
    }
`
