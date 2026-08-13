/**
 * @param {{errorMessage: string}} res
 */
export function falloEnLaConexionMqtt(res) {
 console.error(res)
 const mensaje = "Fallo en conexión MQTT: " + res.errorMessage
 alert(mensaje)
}