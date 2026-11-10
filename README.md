
# @engboxcrm/eslint-config

Configurações compartilhadas de ESLint para padronizar os projetos Engbox.

## Requisitos

- Node.js >= 20.9.0
- ESLint ^9.0.0

## Instalação

```bash
npm install -D eslint @engboxcrm/eslint-config
```

## Configuração

Crie `eslint.config.js` na raiz do projeto.

### React Native / Expo

```javascript
import engbox from '@engboxcrm/eslint-config/react-native';

export default engbox;
```

### React

```javascript
import engbox from '@engboxcrm/eslint-config/react';

export default engbox;
```

### Node.js

```javascript
import engbox from '@engboxcrm/eslint-config/node';

export default engbox;
```

### TypeScript

```javascript
import engbox from '@engboxcrm/eslint-config/typescript';

export default engbox;
```

### JavaScript

```javascript
import engbox from '@engboxcrm/eslint-config/base';

export default engbox;
```

## Prettier

Instale:

```bash
npm install -D prettier
```

Crie `prettier.config.js`:

```javascript
import prettierConfig from '@engboxcrm/eslint-config/prettier';

export default prettierConfig;
```

## Scripts recomendados

```json
{
  "scripts": {
    "lint": "eslint src",
    "lint:fix": "eslint src --fix",
    "format": "prettier src --write",
    "format:check": "prettier src --check"
  }
}
```

## Versionamento

- patch: correções.
- minor: novas funcionalidades e regras compatíveis.
- major: mudanças incompatíveis.

## Licença

MIT
