```bash
hotel-reservation-system/
├── backend/
│   ├── api/
│   │   ├── controllers/          # Controladores para manejar las solicitudes
│   │   ├── models/               # Modelos de datos (ORM)
│   │   ├── routes/               # Rutas de la API
│   │   └── services/             # Servicios de negocio y lógica de aplicación
│   ├── config/                   # Archivos de configuración
│   ├── database/                 # Scripts de inicialización y migración de la base de datos
│   ├── middleware/               # Middleware para autenticación y manejo de errores
│   ├── tests/                    # Pruebas unitarias y de integración
│   ├── utils/                    # Utilidades generales
│   └── app.py                    # Archivo principal de la aplicación
├── frontend/
│   ├── public/                   # Archivos públicos y recursos estáticos
│   ├── src/
│   │   ├── components/            # Componentes reutilizables
│   │   ├── pages/                 # Páginas de la aplicación
│   │   ├── services/              # Llamadas a la API y lógica de negocio
│   │   ├── hooks/                 # Hooks personalizados de React
│   │   ├── styles/                # Archivos de estilo (CSS/SCSS)
│   │   └── utils/                 # Utilidades específicas del frontend
│   ├── tests/                    # Pruebas de interfaz de usuario y componentes
│   └── package.json               # Configuración del proyecto frontend
├── integrations/                 # Servicios externos y microservicios
│   ├── payment-gateway/          # Integración con pasarelas de pago
│   ├── notification-service/     # Servicio de envío de notificaciones
│   └── inventory-sync/           # Sincronización con otros sistemas de inventario
├── docs/                         # Documentación del proyecto
├── docker/                       # Archivos de configuración de Docker
├── config/                       # Archivos de configuración compartidos
├── scripts/                      # Scripts de automatización y despliegue
├── logs/                         # Archivos de registro del sistema
├── .env                          # Variables de entorno
├── docker-compose.yml            # Composición de servicios con Docker
└── README.md                     # Documentación general del proyecto
```