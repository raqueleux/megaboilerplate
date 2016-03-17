import React from 'react';
import cx from 'classnames';
import { VelocityComponent } from 'velocity-react';

const JS_FRAMEWORK_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 50 50">
    <path d="M 29.125 7.34375 L 17.125 41.34375 L 20.875 42.65625 L 32.875 8.65625 L 29.125 7.34375 z M 9.9375 13.375 L 1.25 23.71875 L 0.1875 25 L 1.25 26.28125 L 9.9375 36.65625 L 13.03125 34.09375 L 5.40625 25 L 13 15.9375 L 9.9375 13.375 z M 40.0625 13.375 L 37 15.9375 L 44.59375 25 L 37 34.0625 L 40.09375 36.625 L 48.71875 26.28125 L 49.78125 25 L 48.71875 23.71875 L 40.0625 13.375 z" overflow="visible"></path>
  </svg>
);

class JsFramework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleAdditionalOptions = this.toggleAdditionalOptions.bind(this);
  }

  toggleAdditionalOptions() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const props = this.props;
    const state = this.state;
    let description;

    switch (props.jsFramework) {
      case 'react':
        description = (
          <div>
            <strong><a href="https://facebook.github.io/react/" target="_blank">React</a></strong> — A Library for building UIs. Advantages: simple, declarative, composable components, Virtual DOM, one-way reactive data-flow.
          </div>
        );
        break;
      case 'angular':
        description = (
          <div>
            <strong><a href="https://angular.io/" target="_blank">Angular 2</a></strong> — A JavaScript framework for building web apps. Advantages: feature-rich, big community, two-way data binding, MVC architecture.
          </div>
        );
        break;
      case 'vue':
        description = (
          <div>
            <strong><a href="http://vuejs.org/" target="_blank">Vue.js</a></strong> — Intuitive, Fast and Composable MVVM for building interactive interfaces.
          </div>
        );
        break;
      default:
        description = <div className="placeholder"></div>;
    }

    const additionalOptions = (state.showOptions && props.jsFramework === 'react') ? (
      <div>
        <VelocityComponent runOnMount animation="transition.slideUpIn">
          <div className="checkbox transparent">
            <label className="hint--right hint--rounded" data-hint="Predictable state container for JavaScript apps. Redux is an evolution of the Facebook's Flux, without all the complexity.">
              <input type="checkbox"  name="reactOptionsCheckboxes" value="redux" onChange={props.handleChange} checked={props.reactOptions && props.reactOptions.has('redux')}/>
              <span>Redux</span>
            </label>
          </div>
        </VelocityComponent>
        <VelocityComponent runOnMount animation="transition.slideUpIn" delay={75}>
          <div className="checkbox transparent">
            <label className="hint--right hint--rounded" data-hint="A complete routing library for React. React Router keeps your UI in sync with the URL.">
              <input type="checkbox" name="reactOptionsCheckboxes" value="reactRouter" onChange={props.handleChange} checked={props.reactOptions && props.reactOptions.has('reactRouter')}/>
              <span>React Router</span>
            </label>
          </div>
        </VelocityComponent>
        <VelocityComponent runOnMount animation="transition.slideUpIn" delay={150}>
          <div className="checkbox transparent">
            <label className="hint--right hint--rounded" data-hint="Relay is a framework from Facebook that provides data-fetching functionality for React applications.">
              <input type="checkbox" name="reactOptionsCheckboxes" value="graphql" onChange={props.handleChange} checked={props.reactOptions && props.reactOptions.has('graphql')}/>
              <span>GraphQL + Relay</span>
            </label>
          </div>
        </VelocityComponent>
        <VelocityComponent runOnMount animation="transition.slideUpIn" delay={225}>
          <div className="checkbox transparent">
            <label className="hint--right hint--rounded" data-hint="ECMAScript 2015 (ES6) is the upcoming sixth major release of the ECMAScript language specification.">
              <input type="checkbox" name="reactOptionsCheckboxes" value="es6" onChange={props.handleChange} checked={props.reactOptions && props.reactOptions.has('es6')}/>
              <span>ES6</span>
            </label>
          </div>
        </VelocityComponent>
        <VelocityComponent runOnMount animation="transition.slideUpIn" delay={300}>
          <div className="checkbox transparent">
            <label className="hint--right hint--rounded" data-hint="Tweak React components in real time, while preserving the state.">
              <input type="checkbox" name="reactOptionsCheckboxes" value="hotReload" onChange={props.handleChange} checked={props.reactOptions && props.reactOptions.has('hotReload')}/>
              <span>React Transform HMR</span>
            </label>
          </div>
        </VelocityComponent>
      </div>
    ) : null;

    const additionalOptionsButton = (props.jsFramework === 'react') ? (
      <div>
        <span className="options" onClick={this.toggleAdditionalOptions}>
          <img className={cx('animated', { fast: state.showOptions })} src="/img/svg/options.svg"/>
          <span>Additional Options</span>
        </span>
        {additionalOptions}
      </div>
    ) : null;

    const recommended = props.beginner ? (
      <span className="hint--top hint--rounded" data-hint="Recommended">
        <img src="/img/svg/recommended.svg" alt="Recommended"/>
      </span>
    ) : null;

    return (
      <div className={cx('zoomInBackwards panel', props.jsFramework)}>
        <div className="panel-heading">
          <h6>{JS_FRAMEWORK_SVG}{!props.jsFramework || props.jsFramework === 'none' ? 'JavaScript Framework' : props.jsFramework}</h6>
          <a href="#" className="stats-icon hint--top hint--rounded" data-hint="Download Stats">
            <i className="fa fa-bar-chart"/>
          </a>
        </div>
        <div className="panel-body">
          {description}
          <div className="radio-group">
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/none.png" alt="None"/>
              <input type="radio" name="jsFrameworkRadios" value="none" onChange={props.handleChange} checked={props.jsFramework === 'none'}/>
              <span>None</span>
              {recommended}
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/react-logo.svg" alt="React"/>
              <input type="radio" name="jsFrameworkRadios" value="react" onChange={props.handleChange} checked={props.jsFramework === 'react'}/>
              <span>React</span>
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/angular2.png" alt="Angular"/>
              <input type="radio" name="jsFrameworkRadios" value="angular" onChange={props.handleChange} checked={props.jsFramework === 'angular'}/>
              <span>Angular 2</span>
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/polymer-logo.svg" alt="Polymer"/>
              <input type="radio" name="jsFrameworkRadios" value="polymer" onChange={props.handleChange} checked={props.jsFramework === 'polymer'}/>
              <span>Polymer</span>
            </label>
            <label className="radio-inline">
              <img className="btn-logo" src="/img/svg/vue-logo.png" alt="Vue.js"/>
              <input type="radio" name="jsFrameworkRadios" value="vue" onChange={props.handleChange} checked={props.jsFramework === 'vue'}/>
              <span>Vue.js</span>
            </label>
          </div>

          {additionalOptionsButton}
        </div>
      </div>
    );
  }
}

export default JsFramework;
