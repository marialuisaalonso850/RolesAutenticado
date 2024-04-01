const Token = require('../models/token');
const jwt = require('jsonwebtoken');
const { getTokenFromHeader } = require("../utils/getTokenFromHeader");
const { generateAccessToken } = require('../services/generateTokens');

async function refreshToken(req, res) {
    const refreshToken = getTokenFromHeader(req.headers);
    console.log("Valor del refreshToken:", refreshToken); 

    if (!refreshToken) {
        return res.status(401).json({ error: "No se proporcionó refreshToken" });
    }

    try {
        // Verificar el token de actualización
        jwt.verify(refreshToken, process.env.refreshToken, (err, decoded) => {
            console.log("Tokensito "+refreshToken);
            if (err) {
                console.error("Error al verificar refreshToken:", err);
                return res.status(401).json({ error: "El refreshToken es inválido" });
            }
            // Si el token de actualización es válido, generar un nuevo token de acceso
            const accessToken = generateAccessToken(decoded.user);
            return res.status(200).json({ accessToken });
        });
    } catch (error) {
        console.error("Error al refrescar el token:", error);
        return res.status(500).json({ error: "Error interno del servidor al refrescar el token" });
    }
}

module.exports = {
    refreshToken
};
