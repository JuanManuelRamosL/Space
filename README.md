Space Explorer
Space Explorer es una aplicación móvil desarrollada en React Native que ofrece información detallada sobre el clima de Marte y las misiones de la compañía SpaceX. Utiliza la API de la NASA para obtener datos sobre el clima marciano y la API de SpaceX para obtener información sobre las misiones espaciales.

Características
Clima de Marte: Obtén datos actualizados sobre el clima en Marte, incluyendo temperatura, presión atmosférica y velocidad del viento.
Misiones de SpaceX: Consulta información sobre las misiones pasadas, presentes y futuras de SpaceX, incluyendo detalles de los cohetes y lanzamientos.
Interfaz amigable: Navega fácilmente entre las secciones de clima y misiones con una interfaz de usuario intuitiva.
Tecnologías Utilizadas
React Native: Framework principal para el desarrollo de la aplicación móvil.
APIs:
NASA: Para obtener datos sobre el clima de Marte.
SpaceX: Para obtener información sobre las misiones espaciales.
FontAwesome5: Para iconografía y mejorar la presentación visual.
Instalación
Clona el repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/space-explorer.git
cd space-explorer
Instala las dependencias:

bash
Copiar código
npm install
Configura las APIs:

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
makefile
Copiar código
NASA_API_KEY=tu_clave_api_de_nasa
SPACEX_API_URL=https://api.spacexdata.com/v4/
Inicia la aplicación:

bash
Copiar código
npm start
Uso
Pantalla de inicio:

Muestra un resumen de las características principales de la aplicación.
Clima de Marte:

Muestra datos en tiempo real del clima en Marte utilizando la API de la NASA.
Misiones de SpaceX:

Proporciona detalles sobre las misiones de SpaceX, incluyendo fechas de lanzamiento, detalles del cohete y más.
Estructura del Proyecto
css
Copiar código
space-explorer/
├── src/
│   ├── components/
│   │   ├── MarsWeather.js
│   │   ├── SpaceXMissions.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── MarsWeatherScreen.js
│   │   ├── SpaceXMissionsScreen.js
│   ├── services/
│   │   ├── nasaApi.js
│   │   ├── spacexApi.js
│   ├── styles/
│   │   ├── styles.js
│   ├── App.js
│   ├── env.js
├── .gitignore
├── package.json
├── README.md
