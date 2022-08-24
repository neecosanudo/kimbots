# KimboTS

*KimboTS* es un framework no-web que pretende brindar un entorno con pruebas unitarias y buenas prácticas a personas que estén iniciando en TypeScript.

> <u>Aclaración</u>: el proyecto está en construcción y su documentación también. 
>
> Consulta la sección de [planificación](#planificado) para saber más.

## Alcance de la documentación

Esta documentación asume que tú, como usuario y lector, tienes un conocimiento básico de programación y de sus términos.

<u>La documentación abarca</u>:

- Una guía para conocer el *framework*.
- Una guía para empezar a usar el *framework*.
- Los requisitos del sistema necesarios.
- La proyección sobre lo que se quiere agregar o mejorar.

<u>La documentación no explica</u>:

- La sintaxis de TypeScript, Jest, TSDoc.
- Cómo instalar NodeJS ni NPM.
- Como funciona VSCode.

## Índice

1. [Primeros pasos](#primeros-pasos)
   1. [Explicación de código inicial y nombres de archivos](#explicación-de-código-inicial-y-nombres-de-archivos)
      1. [Manejo de módulos](#manejo-de-módulos)
      2. [Sobre los comentarios en código](#sobre-los-comentarios-en-código)

   2. [Aclaraciones sobre la arquitectura de tu proyecto](#aclaraciones-sobre-la-arquitectura-de-tu-proyecto)

2. [Recomendación de flujo de trabajo](#recomendación-de-flujo-de-trabajo)
   1. [Actualizar datos personales del proyecto](#actualizar-datos-personales-del-proyecto)
   2. [Flujo recomendado de trabajo basado en TDD](#flujo-recomendado-de-trabajo)

3. [Requisitos del sistema](#requisitos-del-sistema)
4. [Proyección planificada](#proyección-planificada)

## Primeros pasos

Esta sección explica como descargar e instalar *KimboTS*, y te dará un panorama general de lo que ofrece.

Si quieres empezar a utilizar el *framework*, ve a [esta sección](#recomendación-de-flujo-de-trabajo).

> Aclaración: revisa los [requisitos para ejecutar el código](#requisitos-necesarios).

****

El siguiente tutorial te va a guiar en los primeros pasos con *KimboTS*:

1. Clonas el repositorio con el siguiente comando:

```bash
git clone git@github.com:neecosanudo/kimbots.git
```

2. Te mueves dentro del directorio nuevo e instalas las dependencias:

```bash
cd kimbots
npm install
```

3. En dos terminales separadas, ejecutas los comandos para trabajar con los entornos de desarrollo:

```bash
# Terminal N°1
npm run start:dev

# Terminal N°2
npm run test:dev
```

Ahora puedes ver "en vivo" si tienes algún error de código y el estado actual de las pruebas unitarias.

[Volver al índice](#índice)

### Explicación de código inicial y nombres de archivos

Tres archivos dentro de `src/` te ayudarán a entender lo que puedes hacer con *KimboTS*:

`index.ts` contiene la lógica.

```typescript
class Calculadora implements CalculadoraDto {
  /** código (...) */
}
```

`index.dto.ts` contiene definiciones de tipos de datos.

```typescript
interface CalculadoraDto {
  /** código (...) */
}
```

`index.spec.ts` contiene las pruebas unitarias.

```typescript
describe('Descripción del bloque de pruebas', () => {
  test('Descripción de la prueba unitaria', () => {
    /** código (...) */
  });
});
```

Por cada funcionalidad que crees, estos tres tipos de archivos cubrirán las necesidades básicas de tu proyecto y te permitirán tener un flujo de desarrollo ordenado.

#### Manejo de módulos

<u>¿Qué es un módulo?</u> Es un componente de software, o parte de un programa, que contiene una o más rutinas. A saber, uno o más módulos desarrollados independientemente forman un programa.

*ES Modules* es el estándar de *ECMAScript* para trabajar con módulos y es el que utiliza *KimboTS*.

> Más información sobre ES Modules en [este post](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) (inglés).

**Ejemplos de uso de ES Modules**:

<u>Exportar</u>:

```typescript
export default class Calculadora implements CalculadoraDto {
  /** código (...) */
}
```

<u>Importar</u>:

```typescript
import Calculadora from './index';
import CalculadoraDto from './index.dto';
```

[Volver al índice](#índice) | [Volver a inicio de sección](#explicación-de-código-inicial-y-nombres-de-archivos)

#### Sobre los comentarios en código

Cuando revises los archivos del directorio `src/`, verás que además incluyen comentarios dentro del código.

```typescript
/**
 * Divide dos números entre si y devuelve el resultado.
 * Si el denominador es cero, devuelve cero.
 *
 * @param numerador - Cualquier número.
 * @param denominador - Cualquier número.
 * @returns Resultado de dividir numerador por denominador.
 */
dividir(numerador: number, denominador: number): number {
  /** código (...) */
}
```

Estos comentarios están basados en TSDoc y permiten documentar tu código con comentarios.

[Volver al índice](#índice) | [Volver a inicio de sección](#explicación-de-código-inicial-y-nombres-de-archivos)

### Aclaraciones sobre la arquitectura de tu proyecto

*KimboTS* no tiene opinión sobre la arquitectura interna de directorios dentro de `src/`; queda a decisión tuya según tus necesidades.

Es recomendada la siguiente convención de nombres para los archivos:

- `.ts` si contiene lógica.
- `.dto.ts` si contiene definiciones de tipo de dato.
- `.spec.ts` si contienen pruebas unitarias.

[Volver al índice](#índice)

## Recomendación de flujo de trabajo

Esta sección explica como puedes utilizar *KimboTS* para empezar a trabajar en tus proyectos.

### Actualizar datos personales del proyecto

Antes de empezar a crear grandes ideas, es conveniente que actualices los datos que vienen por defecto.

**Descarga la *KimboTS***

```bash
git clone git@github.com:neecosanudo/kimbots.git <tu-directorio-de-proyecto>
cd <tu-directorio-de-proyecto>
```

**Actualizar datos en `package.json`**

La forma correcta de actualizar datos en el `package.json` es utilizando el comando `npm pkg set <llave>:<valor>`:

```bash
npm pkg set name="nombre-nuevo" \
    version="0.1.0" \
    description="descripción personalizada" \
    author="Tu nombre"
```

- Para saber más sobre `npm pkg`, la [documentación oficial](https://docs.npmjs.com/cli/v8/commands/npm-pkg) es el mejor lugar.

**Limpiar o eliminar archivos de ejemplo**

Como ya [mencionamos antes](#aclaraciones-sobre-la-arquitectura-de-tu-proyecto), la arquitectura de directorios queda a cargo tuyo según las necesidades de tu proyecto. Si quieres eliminar o limpiar los archivos de ejemplo, es tu decisión.

**Instalar dependencias**

```bash
npm run install
```

**Remover *git* actual e iniciar uno nuevo**

El siguiente comando elimina el historial original e inicia un repositorio nuevo:

```bash
npm run git:restart
```

**Iniciar los entornos de desarrollo**

En 2 terminales distintas ejecutas los comandos:

```bash
#Terminal 1: actualización constantes de cambios
npm run start:dev

# Terminal 2: escucha de pruebas unitarias
npm run test:dev
```

[Volver al índice](#índice) | [Volver a inicio de sección](#actualizar-datos-personales-del-proyecto)

### Flujo recomendado de trabajo

El flujo explicado a continuación está basado en TDD (*Test Driven Development*).

> Nota: esta sección continua desde la [sección anterior](#actualizar-datos-personales-del-proyecto). 

El resultado final obtenido de estos pasos se puede ver en el código que viene por defecto en `src/`.

**Crear *DTO***

<u>¿Qué es un *DTO*?</u> En castellano, sus siglas se traducen a *Objeto de Transferencia de Datos*, y es un tipo de utilidad de TypeScript que se puede usar para representar un objeto. Está destinado a ser utilizado en los límites de una aplicación.

>  Más información en [este post](https://dev.to/tamj0rd2/dto-a-typescript-utility-type-4o3m) (inglés).

```typescript
/** index.dto.ts */
export default interface CalculadoraDto {
  dividir: (numerador: number, denominador: number) => number;
}
```

**Crear prueba unitaria**

Importas el *DTO* para condicionar el tipo de dato dentro de la prueba unitaria. Creas un <u>bloque de prueba unitaria</u> con un caso particular.

> <u>Nota</u>: la prueba unitaria falla porque la funcionalidad no existe todavía.

```typescript
/** index.spec.ts */
import CalculadoraDto from './index.dto';

describe('Clase Calculadora', () => {
  const calculadora: CalculadoraDto = new Calculadora();
  describe('Método dividir', () => {
    // Funcionalidad que queremos evaluar
    test('Debe devolver un número', () => {
      const respuesta = calculadora.dividir(10, 2);
      expect(respuesta).toBe(5);
    });
  });
});

```

**Agregar funcionalidad**

Importas el *DTO* para dar formato al tipo de dato. Creas la clase `Calculadora ` con método `dividir `.

El código de la funcionalidad debe pasar la prueba unitaria que creaste antes. 

```typescript
/** index.ts */
import CalculadoraDto from './index.dto';

export default class Calculadora implements CalculadoraDto {
  dividir(numerador: number, denominador: number): number {
    const resultado = numerador / denominador;
    return resultado;
  }
}
```

**Itera entre los puntos anteriores siguiendo el mismo orden**

Las pruebas unitarias te permiten plantear un problema en tu aplicación. Con ese problema planteado vas a poder mejorar la funcionalidad que lo resuelve. 

Iterar entre "*escribir una prueba unitaria*" y "*crear/mejorar funcionalidad que pase la prueba*" hará tu código más robusto.

Continuando con el ejemplo, agregas una nueva prueba unitaria: en este caso la prueba evalúa que el divisor no sea igual al número cero.

```typescript
/** index.spec.ts */
import Calculadora from './index';
import CalculadoraDto from './index.dto';

describe('Clase Calculadora', () => {
   /** (...) */
    test('El denominador no puede ser cero', () => {
      const respuesta = calculadora.dividir(10, 0);
      expect(respuesta).toBe(0);
    });
  });
});
```

**Refactor al código de la funcionalidad**

Con la nueva prueba unitaria creada, haces *refactor* sobre tu funcionalidad para que pasé la nueva prueba.

> <u>Nota</u>: dividir un número por cero da infinito. Para no complicar el código de muestra, el método en ese caso solo devuelve el número cero. No es matemáticamente correcto, pero es útil para no complicar la explicación. 

```typescript
/** index.ts */
import CalculadoraDto from './index.dto';

export default class Calculadora implements CalculadoraDto {
  dividir(numerador: number, denominador: number): number {
    /** Con un condicional, comprueba que el denominador no sea cero */
    if (denominador === 0) {
      return 0;
    }
    const resultado = numerador / denominador;
    return resultado;
  }
}
```

***Git commit* a los cambios en los archivos correspondientes de la funcionalidad**

El flujo de *commits* en *Git* es decisión del usuario o de su equipo de trabajo.

En este caso, todos los cambios corresponden a una misma funcionalidad, por lo que resulta lógico agruparlos en un solo *commit*. Esta recomendación viene para no hacer un *spam* de *commits*.

```bash
git add <archivos con modificaciones>
git commit -m "Agrego/actualizo funcionalidad"
```

**Documentar en código la funcionalidad**

*KimboTS* cuenta con TSDoc y los *plugins* necesarios para comprobar con ESLint y Prettier en código.

TSDoc es un formato para documentar código de TypeScript con comentarios, propuesto por Microsoft. El mejor lugar para ver los *tags* disponibles es su [documentación oficial](https://tsdoc.org/pages/tags/param/).

<u>Ejemplo de documentar en código con TSDoc</u>:

```typescript
/** index.ts */
import CalculadoraDto from './index.dto';

/**
 * Calculadora realiza operaciones básicas:
 * - división
 */
export default class Calculadora implements CalculadoraDto {
  /**
   * Divide dos números entre si y devuelve el resultado.
   * Si el denominador es cero, devuelve cero.
   *
   * @param numerador - Cualquier número.
   * @param denominador - Cualquier número.
   * @returns Resultado de dividir numerador por denominador.
   */
  dividir(numerador: number, denominador: number): number {
    if (denominador === 0) {
      return 0;
    }

    const resultado = numerador / denominador;
    return resultado;
  }
}
```

> <u>Nota</u>: VSCode ya viene con TSDoc incorporado. 
>
> Con esta documentación en comentario, VSCode crea la ventana emergente que aparece sobre una función/clase cuando colocamos el cursor sobre su nombre.

***Git commit* a la documentación en código**

El *commit* de la documentación se recomienda que se haga aparte porque la documentación en código depende del código en sí; si el código cambia, la documentación cambia.

[Volver al índice](#índice) | [Volver a inicio de sección](#flujo-recomendado-de-trabajo)

## Requisitos del sistema

Esta sección contiene los requisitos del sistema para poder trabajar con *KimboTS*.

### NodeJS y NPM

La versión `16.17.0` de NodeJS es la versión LTS (*Long Term Support*), por lo que el proyecto está configurado para que esa sea la versión mínima requerida.

> Puedes consultar el estado de versiones de NodeJS en [esta sección de su página oficial](https://nodejs.org/en/about/releases/).

NPM `8.0.0` es la versión mínima del manejador de paquetes.

### VSCode

VSCode tiene todo lo necesario para trabajar con TypeScript. Puedes utilizar el editor de texto que quieras.

Las extensiones de [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) y [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) complementan la configuración total del proyecto.

[Volver al índice](#índice)

## Proyección planificada

La siguiente lista menciona la proyección de lo que se va a implementar en la plantilla:

- [ ] Aplicar Docker al proyecto.
- [ ] Extracción de documentación en código.
- [ ] Agregar más funcionalidades a las pruebas de código.
- [ ] Crear ejecutable para configurarse e instalarse más fácil.
- [ ] Crear glosario.

[Volver al índice](#índice)
