# Electron Quick Start

**Clonez et démarrez pour faire fonctionner Electron.**

Ceci est une version minimale de Electron basé sur [Guide Rapide](https://electronjs.org/docs/tutorial/quick-start) avec la documention de Electron. 

**Utilisez cette application en même temps que [Electron API Demos](https://electronjs.org/#get-started) pour avoir des exemples d'API qui vous aideront à démarrer.**

Une application Electron basique n'a besoin que de ces fichiers :

- `package.json`
- `main.js`
- `index.html`

Vous pouvez en savoir plus sur chacun de ces composants dans la rubrique [Guide Rapide](https://electronjs.org/docs/tutorial/quick-start).

## Utilisation

Pour cloner et démarrer ce répertoire il vous faudra [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en/download/) (qui va avec [npm](http://npmjs.com)) installer sur votre PC. Depuis votre ligne de commande:

```bash
# Clone this repository
git clone https://github.com/nemo6/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install electron electron-builder
# Run the app
npm start
# Build the app
npm run dist
```

Note: Si vous utilisez Linux Bash pour Windows, [voir ce guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou utilisez `node` à partir de l'invite de commande.

## Resources

- [electron](https://www.npmjs.com/package/electron)
- [electron-builder](https://www.npmjs.com/package/electron-builder)
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start)
- [Build an Electron App in Under 60 Minutes](https://www.youtube.com/watch?v=kN1Czs0m1SU)

## Other builder

- electron-forge
- electron-packager

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
