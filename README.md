# Empresa-Coperex-Daniel-Tuy
La API de Gestión de Socios y Empresas de Interfer es una herramienta moderna creada con Node.js, Express y MongoDB para facilitar el registro y administración de empresas en la feria organizada por COPEREX. Permite a las empresas registrar información clave, como su impacto, trayectoria y categoría, asegurando un almacenamiento seguro. Además, genera reportes automáticos en Excel, simplificando el análisis y la toma de decisiones. Con un diseño escalable y fácil de usar, esta API optimiza la organización de Interfer, haciendo el proceso más ágil y eficiente para todos.

# Credenciales del administrador por defecto
- **username:** `danitt030`
-  **email:** `danieltuy@gmail.com`
- **password:** `Cremas30*`
  
## Endpoints de la API

### Usuarios
### Autenticación

- **Registrar Administrador**
  - **URL:** `/empresaCoperex/v1/auth/register`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "email": "string",
      "phone": "string",
      "password": "string",
      "role": "string",
    }
    ```

- **LOGIN**
  - **URL:** `/empresaCoperex/v1/auth/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "username": "String"
      "email": "string",
      "password": "string"
    }
    ```
    Puede ingresar el username o el email

- **Cambiar contraseña**
  - **URL:** `/empresaCoperex/v1/User/updatePassword/:uid`
  - **Método:** `PATCH`
  - **Cuerpo:**
    ```json
    {
      "oldPassword": "String",
      "newPassword": "String"
    }
    ```
    
- **Actualizar Usuario**
  - **URL:** `/empresaCoperex/v1/User/updateUser/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "email": "string",
      "phone": "string",
    }
    ```

### Empresa
- **Registrar Empresa**
  - **URL:** `/empresaCoperex/v1/Empresa/agregarEmpresa`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "nombreEmpresa": "string",
      "direccionEmpresa": "string",
      "telefonoEmpresa": "string",
      "emailEmpresa": "string",
      "ContactoDueño": "string",
      "anoFundacion": "Number",
      "categoriaEmpresa": "string",
      "nivelImpacto": "string",
    }
    ```
    Debe iniciar sesion con el administrador y hacer validacion del Token para que pueda agregar la empresa.

 - **Editar Empresa**
  - **URL:** `/empresaCoperex/v1/Empresa/editarEmpresa/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "nombreEmpresa": "string",
      "direccionEmpresa": "string",
      "telefonoEmpresa": "string",
      "emailEmpresa": "string",
      "ContactoDueño": "string",
      "anoFundacion": "Number",
      "categoriaEmpresa": "string",
      "nivelImpacto": "string",
    }
    ```
    Debe hacer la validacion del Token para que se pueda editar la empresa

- **Generar Reporte Excel**
  - **URL:** `/empresaCoperex/v1/Empresa/generarReporte`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
    "minTrayectoria": "Number",
    "maxTrayectoria": "Number",
    "categoriaEmpresa": "String",
    "orden": "String"
    }
    ```
    Puede colocar solo un atributo en especifico y puede borrar los demas.

  - **Categoria**
      - **Cuerpo:**
     
        ```json
          {
           "categoriaEmpresa": "String",
          }
        ```
        
  - **Orden A-Z**
     - **Cuerpo:**
          
        ```json
        {
          "orden": "A-Z"
        }
        ```
  - **Orden Z-A**
    - **Cuerpo:**
          
        ```json
        {
        "orden": "Z-A"
        }
        ```
  - **Años de trayectoria**
    - **Cuerpo:**
          
        ```json
        {
        "minTrayectoria": "Number",
        "maxTrayectoria": "Number",
        }
        ```
    Puede combinar los atributos que desea al momento de generar el reporte.

  

