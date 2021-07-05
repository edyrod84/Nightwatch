# Completar y enviar formulario de ‘Join our team’
 * Ingresar a la web de December Labs
 * Ingresar a la sección ‘Careers’ y validar que la sección se despliegue correctamente
 * Ingresar el formulario de ‘Join our team’ desde cualquier botón de ‘Apply now’
 * Dentro del formulario completar los diferentes campos con datos a elección, a no ser el email, 
 en el cual se debe ingresar "test@decemberlabs.com"
 * Enviar el formulario y validar que el mismo se envió de forma exitosa

## Test
1. Test navigates to December Labs home page.
1. Waits for Menu to be visible and clicks on it
1. Waits for the careers link and clicks on it.
1. Asserts title to ensure we are in the right page Careers
1. Asserts also that the header constains text Careers
1. Moves to the QA section and clicks on apply now
1. Fills the form with random values generated except for email and sends.
1. Asserts user receives a confirmation message

# Set Up

1. Decompress zip file
1. Open terminal in Mac/Linux or cmd prompt in windows
1. Run `cd pathToFolder` where pathToFolder is the path to the folder created by decompressing the ZIP file
1. Run `npm install` to install framework dependencies

## Run Test
1. Ater installing dependencies run `npx nightwatch` this will run the test in chrome previously with the driver previously downloaded with dependencies.