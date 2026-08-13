/**
 * @param {{
 *   errorCode: number,
 *   errorMessage: string
 *  }} responseObject
 */
export function conexionMqttPerdida(responseObject) {
 if (responseObject.errorCode !== 0) {
  const mensaje = "Conexión MQTT terminada " + responseObject.errorMessage
  console.error(mensaje)
  alert(mensaje)
 }
}