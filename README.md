# Dami - Chatbot Inteligente sobre Fútbol

Aplicación web interactiva que simula un chat temático centrado exclusivamente en el fútbol, con capacidades de comunicación en tiempo real y búsqueda dinámica de información.

---

## Características Principales

* **Comunicación en Tiempo Real:** Integración del protocolo **MQTT** mediante la librería **Paho JavaScript** para la mensajería instantánea a través de un *broker* público.
* **Búsqueda Semántica Dinámica:** Conexión con la **API de Wikipedia** para procesar consultas sobre fútbol, extraer información actualizada y generar respuestas automáticas.
* **Diseño Responsivo y Moderno:** Interfaz de usuario adaptable a diferentes dispositivos con **HTML5 y CSS3** personalizados.
* **Arquitectura Robusta:** Sistema modular de manejo de errores para garantizar estabilidad en las consultas a APIs externas y conexiones WebSocket/MQTT.

---

## Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Protocolos & Mensajería:** MQTT, Paho MQTT Client library
* **APIs Externa:** Wikipedia REST API


El bot **"Dami"** recibe mensajes del usuario a través del cliente MQTT, evalúa si la consulta está relacionada con el ámbito futbolístico y busca automáticamente en Wikipedia para dar respuestas precisas y contextualizadas.
