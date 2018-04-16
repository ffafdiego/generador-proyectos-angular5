'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Bienvenido al generador de proyectos: !'));

    const prompts = [
      {
        type: 'list',
        name: 'moduleType',
        message: 'Es una aplicación web o una librería:',
        choices: [
          {
            name: 'Aplicación Web',
            value: 'web',
            checked: true
          },
          {
            name: 'Librería',
            value: 'lib'
          }
        ]
      },
      {
        name: 'appName',
        message: 'Por favor ingresa el nombre de tu aplicación',
        default: 'proyecto-base'
      },
      {
        name: 'description',
        message: 'Ingresa una descripción del proyecto'
      },
      {
        name: 'author',
        message: 'Autor',
        default: 'Best Developer Ever'
      }
    ];
    const promps_libs = [
      {
        type: 'string',
        name: 'module',
        message: 'Nombre Del Componente a agregar en la Librería ? :',
        default: 'hello'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      if (this.props.moduleType === 'lib') {
        return this.prompt(promps_libs).then(props_libs => {
          this.props.module = props_libs.module;
          this.props.capModule = this._upperFirst(props_libs.module);
        });
      }
    });
  }
  writing() {
    console.log(this.props);
    if (this.props.moduleType === 'web') {
      var context = {
        appName: this.props.appName,
        author: this.props.author,
        description: this.props.description,
        moduleType: this.props.moduleType
      };

      // Copy configuration files
      this.fs.copyTpl(
        this.templatePath('base-web/karma.conf.js'),
        this.destinationPath(this.props.appName + '/karma.conf.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/package.json'),
        this.destinationPath(this.props.appName + '/package.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/protractor.conf.js'),
        this.destinationPath(this.props.appName + '/protractor.conf.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/README.md'),
        this.destinationPath(this.props.appName + '/README.md'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/.angular-cli.json'),
        this.destinationPath(this.props.appName + '/.angular-cli.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/.gitignore'),
        this.destinationPath(this.props.appName + '/.gitignore'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/.editorconfig'),
        this.destinationPath(this.props.appName + '/.editorconfig'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-web/tsconfig.json'),
        this.destinationPath(this.props.appName + '/tsconfig.json'),
        context
      );
      this.fs.copy(
        this.templatePath('base-web/e2e'),
        this.destinationPath(this.props.appName + '/e2e')
      );
      this.fs.copy(
        this.templatePath('base-web/src'),
        this.destinationPath(this.props.appName + '/src')
      );
    } else if (this.props.moduleType === 'lib') {
      var context = {
        appName: this.props.appName,
        author: this.props.author,
        description: this.props.description,
        moduleType: this.props.moduleType,
        module: this.props.module,
        capModule: this.props.capModule
      };

      this.fs.copyTpl(
        this.templatePath('base-lib/karma.conf.js'),
        this.destinationPath(this.props.appName + '/karma.conf.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/package.json'),
        this.destinationPath(this.props.appName + '/package.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/.npmrc'),
        this.destinationPath(this.props.appName + '/.npmrc'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/ng-package.json'),
        this.destinationPath(this.props.appName + '/ng-package.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/protractor.conf.js'),
        this.destinationPath(this.props.appName + '/protractor.conf.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/README.md'),
        this.destinationPath(this.props.appName + '/README.md'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/.angular-cli.json'),
        this.destinationPath(this.props.appName + '/.angular-cli.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/.gitignore'),
        this.destinationPath(this.props.appName + '/.gitignore'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/.editorconfig'),
        this.destinationPath(this.props.appName + '/.editorconfig'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/tsconfig.json'),
        this.destinationPath(this.props.appName + '/tsconfig.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/tslint.json'),
        this.destinationPath(this.props.appName + '/tslint.json'),
        context
      );
      this.fs.copy(
        this.templatePath('base-lib/e2e'),
        this.destinationPath(this.props.appName + '/e2e')
      );

      this.fs.copyTpl(
        this.templatePath('base-lib/src'),
        this.destinationPath(this.props.appName + '/src'),
        context
      );
      this.fs.delete(this.props.appName + '/src/app/modules/**');

      this.fs.copyTpl(
        this.templatePath('base-lib/src/app/modules/home/home.component.css'),
        this.destinationPath(
          this.props.appName +
            '/src/app/modules/' +
            this.props.module +
            '/' +
            this.props.module +
            '.component.css'
        ),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/src/app/modules/home/home.component.html'),
        this.destinationPath(
          this.props.appName +
            '/src/app/modules/' +
            this.props.module +
            '/' +
            this.props.module +
            '.component.html'
        ),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/src/app/modules/home/home.component.spec.ts'),
        this.destinationPath(
          this.props.appName +
            '/src/app/modules/' +
            this.props.module +
            '/' +
            this.props.module +
            '.component.spec.ts'
        ),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/src/app/modules/home/home.component.ts'),
        this.destinationPath(
          this.props.appName +
            '/src/app/modules/' +
            this.props.module +
            '/' +
            this.props.module +
            '.component.ts'
        ),
        context
      );
      this.fs.copyTpl(
        this.templatePath('base-lib/src/app/modules/home/home.module.ts'),
        this.destinationPath(
          this.props.appName +
            '/src/app/modules/' +
            this.props.module +
            '/' +
            this.props.module +
            '.module.ts'
        ),
        context
      );
    }
  }

  install() {
    this.log(
      'Ya se creó tu base! Ahora ejecuta: \n cd ' + this.props.appName + ' && npm install'
    );
    this.log('ng serve');
    this.log('Ingresa a http://localhost:4200 para ver tu proyecto base');
  }
  _upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
