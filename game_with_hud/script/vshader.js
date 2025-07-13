const vSource = `#version 300 es
    uniform vec3 u_m_pos;
    uniform vec3 u_m_size;
    uniform vec3 u_m_rot;
    uniform int u_mode_hud;
    in vec4 a_position;
    in vec2 a_texcoord;
    out vec2 p_texcoord;

    void main() {
        if (u_mode_hud == 0) {
            gl_Position = a_position;
        } else {
            vec4 pos = a_position;
            mat4 m_pos = mat4(
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                u_m_pos.x, u_m_pos.y, u_m_pos.z, 1.0
            );
            mat4 m_size = mat4(
                u_m_size.x, 0.0, 0.0, 0.0,
                0.0, u_m_size.y, 0.0, 0.0,
                0.0, 0.0, u_m_size.z, 0.0,
                0.0, 0.0, 0.0, 1.0
            );
            mat4 m_rot_x = mat4(
                1.0, 0.0, 0.0, 0.0,
                0.0, cos(u_m_rot.x), sin(u_m_rot.x), 0.0,
                0.0, -sin(u_m_rot.x), cos(u_m_rot.x), 0.0,
                0.0, 0.0, 0.0, 1.0
            );
            mat4 m_rot_y = mat4(
                cos(u_m_rot.y), 0.0, -sin(u_m_rot.y), 0.0,
                0.0, 1.0, 0.0, 0.0,
                sin(u_m_rot.y), 0.0, cos(u_m_rot.y), 0.0,
                0.0, 0.0, 0.0, 1.0
            );
            mat4 m_rot_z = mat4(
                cos(u_m_rot.z), sin(u_m_rot.z), 0.0, 0.0,
                -sin(u_m_rot.z), cos(u_m_rot.z), 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            );
            pos = m_size * pos;
            pos = m_rot_x * pos;
            pos = m_rot_y * pos;
            pos = m_rot_z * pos;
            pos = m_pos * pos;
            gl_Position = pos;
        }
        p_texcoord = a_texcoord;
    }
`
