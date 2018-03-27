System.config({
    transpiler: 'ts',
    typescriptOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        target: "ES5",
        module: "system"
    },
    map: {
      '@angular': 'node_modules/@angular',
      'rxjs': 'node_modules/rxjs',
      'ts': 'node_modules/plugin-typescript',
      'typescript': 'node_modules/typescript'
    },
    meta: {
      '@angular/*': {'format': 'cjs'}
    },
    packages: {
      'app': {
          main: 'main',
          defaultExtension: 'ts'
      },
      'rxjs': {main: 'Rx'},
      '@angular/core': {main: 'bundles/core.umd.min.js'},
      '@angular/common': {main: 'bundles/common.umd.min.js'},
      '@angular/compiler': {main: 'bundles/compiler.umd.min.js'},
      '@angular/router': {main: 'bundles/router.umd.min.js'},
      '@angular/platform-browser': {main: 'bundles/platform-browser.umd.min.js'},
      '@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.min.js'},
      'ts': {main: 'lib/plugin.js'},
      'typescript': {main: 'lib/typescript.js',meta: {'lib/typescript.js': {'exports': 'ts'}}}
    }
});
