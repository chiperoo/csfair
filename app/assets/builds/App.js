(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.2.0";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState2(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect2;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState2;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react-confetti/dist/react-confetti.min.js
  var require_react_confetti_min = __commonJS({
    "node_modules/react-confetti/dist/react-confetti.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e(require_react()) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.ReactConfetti = e(require_react()) : t.ReactConfetti = e(t.React);
      }("undefined" != typeof self ? self : exports, function(t) {
        return function(t2) {
          var e = {};
          function n(r) {
            if (e[r])
              return e[r].exports;
            var i = e[r] = { i: r, l: false, exports: {} };
            return t2[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
          }
          return n.m = t2, n.c = e, n.d = function(t3, e2, r) {
            n.o(t3, e2) || Object.defineProperty(t3, e2, { enumerable: true, get: r });
          }, n.r = function(t3) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
          }, n.t = function(t3, e2) {
            if (1 & e2 && (t3 = n(t3)), 8 & e2)
              return t3;
            if (4 & e2 && "object" == typeof t3 && t3 && t3.__esModule)
              return t3;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t3 }), 2 & e2 && "string" != typeof t3)
              for (var i in t3)
                n.d(r, i, function(e3) {
                  return t3[e3];
                }.bind(null, i));
            return r;
          }, n.n = function(t3) {
            var e2 = t3 && t3.__esModule ? function() {
              return t3.default;
            } : function() {
              return t3;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t3, e2) {
            return Object.prototype.hasOwnProperty.call(t3, e2);
          }, n.p = "", n(n.s = 2);
        }([function(e, n) {
          e.exports = t;
        }, function(t2, e, n) {
          "use strict";
          var r = { linear: function(t3, e2, n2, r2) {
            return (n2 - e2) * t3 / r2 + e2;
          }, easeInQuad: function(t3, e2, n2, r2) {
            return (n2 - e2) * (t3 /= r2) * t3 + e2;
          }, easeOutQuad: function(t3, e2, n2, r2) {
            return -(n2 - e2) * (t3 /= r2) * (t3 - 2) + e2;
          }, easeInOutQuad: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 + e2 : -i / 2 * (--t3 * (t3 - 2) - 1) + e2;
          }, easeInCubic: function(t3, e2, n2, r2) {
            return (n2 - e2) * (t3 /= r2) * t3 * t3 + e2;
          }, easeOutCubic: function(t3, e2, n2, r2) {
            return (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 + 1) + e2;
          }, easeInOutCubic: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 + e2 : i / 2 * ((t3 -= 2) * t3 * t3 + 2) + e2;
          }, easeInQuart: function(t3, e2, n2, r2) {
            return (n2 - e2) * (t3 /= r2) * t3 * t3 * t3 + e2;
          }, easeOutQuart: function(t3, e2, n2, r2) {
            return -(n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 * t3 - 1) + e2;
          }, easeInOutQuart: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 * t3 + e2 : -i / 2 * ((t3 -= 2) * t3 * t3 * t3 - 2) + e2;
          }, easeInQuint: function(t3, e2, n2, r2) {
            return (n2 - e2) * (t3 /= r2) * t3 * t3 * t3 * t3 + e2;
          }, easeOutQuint: function(t3, e2, n2, r2) {
            return (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 * t3 * t3 + 1) + e2;
          }, easeInOutQuint: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 * t3 * t3 + e2 : i / 2 * ((t3 -= 2) * t3 * t3 * t3 * t3 + 2) + e2;
          }, easeInSine: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return -i * Math.cos(t3 / r2 * (Math.PI / 2)) + i + e2;
          }, easeOutSine: function(t3, e2, n2, r2) {
            return (n2 - e2) * Math.sin(t3 / r2 * (Math.PI / 2)) + e2;
          }, easeInOutSine: function(t3, e2, n2, r2) {
            return -(n2 - e2) / 2 * (Math.cos(Math.PI * t3 / r2) - 1) + e2;
          }, easeInExpo: function(t3, e2, n2, r2) {
            return 0 == t3 ? e2 : (n2 - e2) * Math.pow(2, 10 * (t3 / r2 - 1)) + e2;
          }, easeOutExpo: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return t3 == r2 ? e2 + i : i * (1 - Math.pow(2, -10 * t3 / r2)) + e2;
          }, easeInOutExpo: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return 0 === t3 ? e2 : t3 === r2 ? e2 + i : (t3 /= r2 / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t3 - 1)) + e2 : i / 2 * (2 - Math.pow(2, -10 * --t3)) + e2;
          }, easeInCirc: function(t3, e2, n2, r2) {
            return -(n2 - e2) * (Math.sqrt(1 - (t3 /= r2) * t3) - 1) + e2;
          }, easeOutCirc: function(t3, e2, n2, r2) {
            return (n2 - e2) * Math.sqrt(1 - (t3 = t3 / r2 - 1) * t3) + e2;
          }, easeInOutCirc: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2 / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t3 * t3) - 1) + e2 : i / 2 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1) + e2;
          }, easeInElastic: function(t3, e2, n2, r2) {
            var i, o, a, c = n2 - e2;
            return a = 1.70158, 0 === t3 ? e2 : 1 == (t3 /= r2) ? e2 + c : ((o = 0) || (o = 0.3 * r2), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), -i * Math.pow(2, 10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) + e2);
          }, easeOutElastic: function(t3, e2, n2, r2) {
            var i, o, a, c = n2 - e2;
            return a = 1.70158, 0 === t3 ? e2 : 1 == (t3 /= r2) ? e2 + c : ((o = 0) || (o = 0.3 * r2), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), i * Math.pow(2, -10 * t3) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) + c + e2);
          }, easeInOutElastic: function(t3, e2, n2, r2) {
            var i, o, a, c = n2 - e2;
            return a = 1.70158, 0 === t3 ? e2 : 2 == (t3 /= r2 / 2) ? e2 + c : ((o = 0) || (o = r2 * (0.3 * 1.5)), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), t3 < 1 ? i * Math.pow(2, 10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) * -0.5 + e2 : i * Math.pow(2, -10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) * 0.5 + c + e2);
          }, easeInBack: function(t3, e2, n2, r2, i) {
            return void 0 === i && (i = 1.70158), (n2 - e2) * (t3 /= r2) * t3 * ((i + 1) * t3 - i) + e2;
          }, easeOutBack: function(t3, e2, n2, r2, i) {
            return void 0 === i && (i = 1.70158), (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * ((i + 1) * t3 + i) + 1) + e2;
          }, easeInOutBack: function(t3, e2, n2, r2, i) {
            var o = n2 - e2;
            return void 0 === i && (i = 1.70158), (t3 /= r2 / 2) < 1 ? o / 2 * (t3 * t3 * ((1 + (i *= 1.525)) * t3 - i)) + e2 : o / 2 * ((t3 -= 2) * t3 * ((1 + (i *= 1.525)) * t3 + i) + 2) + e2;
          }, easeInBounce: function(t3, e2, n2, i) {
            var o = n2 - e2;
            return o - r.easeOutBounce(i - t3, 0, o, i) + e2;
          }, easeOutBounce: function(t3, e2, n2, r2) {
            var i = n2 - e2;
            return (t3 /= r2) < 1 / 2.75 ? i * (7.5625 * t3 * t3) + e2 : t3 < 2 / 2.75 ? i * (7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75) + e2 : t3 < 2.5 / 2.75 ? i * (7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375) + e2 : i * (7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375) + e2;
          }, easeInOutBounce: function(t3, e2, n2, i) {
            var o = n2 - e2;
            return t3 < i / 2 ? 0.5 * r.easeInBounce(2 * t3, 0, o, i) + e2 : 0.5 * r.easeOutBounce(2 * t3 - i, 0, o, i) + 0.5 * o + e2;
          } };
          t2.exports = r;
        }, function(t2, e, n) {
          t2.exports = n(3);
        }, function(t2, e, n) {
          "use strict";
          n.r(e), n.d(e, "ReactConfetti", function() {
            return Q;
          });
          var r, i, o = n(0), a = n.n(o), c = n(1), s = n.n(c);
          function u(t3, e2) {
            return t3 + Math.random() * (e2 - t3);
          }
          function f(t3, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
            }
          }
          function h(t3, e2, n2) {
            return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
          }
          !function(t3) {
            t3[t3.Circle = 0] = "Circle", t3[t3.Square = 1] = "Square", t3[t3.Strip = 2] = "Strip";
          }(r || (r = {})), function(t3) {
            t3[t3.Positive = 1] = "Positive", t3[t3.Negative = -1] = "Negative";
          }(i || (i = {}));
          var l = function() {
            function t3(e3, n3, r2, o3) {
              !function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), h(this, "context", void 0), h(this, "radius", void 0), h(this, "x", void 0), h(this, "y", void 0), h(this, "w", void 0), h(this, "h", void 0), h(this, "vx", void 0), h(this, "vy", void 0), h(this, "shape", void 0), h(this, "angle", void 0), h(this, "angularSpin", void 0), h(this, "color", void 0), h(this, "rotateY", void 0), h(this, "rotationDirection", void 0), h(this, "getOptions", void 0), this.getOptions = n3;
              var a2, c2, s2 = this.getOptions(), f2 = s2.colors, l2 = s2.initialVelocityX, p2 = s2.initialVelocityY;
              this.context = e3, this.x = r2, this.y = o3, this.w = u(5, 20), this.h = u(5, 20), this.radius = u(5, 10), this.vx = "number" == typeof l2 ? u(-l2, l2) : u(l2.min, l2.max), this.vy = "number" == typeof p2 ? u(-p2, 0) : u(p2.min, p2.max), this.shape = (a2 = 0, c2 = 2, Math.floor(a2 + Math.random() * (c2 - a2 + 1))), this.angle = u(0, 360) * Math.PI / 180, this.angularSpin = u(-0.2, 0.2), this.color = f2[Math.floor(Math.random() * f2.length)], this.rotateY = u(0, 1), this.rotationDirection = u(0, 1) ? i.Positive : i.Negative;
            }
            var e2, n2, o2;
            return e2 = t3, (n2 = [{ key: "update", value: function() {
              var t4 = this.getOptions(), e3 = t4.gravity, n3 = t4.wind, o3 = t4.friction, a2 = t4.opacity, c2 = t4.drawShape;
              this.x += this.vx, this.y += this.vy, this.vy += e3, this.vx += n3, this.vx *= o3, this.vy *= o3, this.rotateY >= 1 && this.rotationDirection === i.Positive ? this.rotationDirection = i.Negative : this.rotateY <= -1 && this.rotationDirection === i.Negative && (this.rotationDirection = i.Positive);
              var s2 = 0.1 * this.rotationDirection;
              if (this.rotateY += s2, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a2, this.context.lineCap = "round", this.context.lineWidth = 2, c2 && "function" == typeof c2)
                c2.call(this, this.context);
              else
                switch (this.shape) {
                  case r.Circle:
                    this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                    break;
                  case r.Square:
                    this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                    break;
                  case r.Strip:
                    this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                }
              this.context.closePath(), this.context.restore();
            } }]) && f(e2.prototype, n2), o2 && f(e2, o2), t3;
          }();
          function p(t3, e2, n2) {
            return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
          }
          var v = function t3(e2, n2) {
            var r2 = this;
            !function(t4, e3) {
              if (!(t4 instanceof e3))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), p(this, "canvas", void 0), p(this, "context", void 0), p(this, "getOptions", void 0), p(this, "x", 0), p(this, "y", 0), p(this, "w", 0), p(this, "h", 0), p(this, "lastNumberOfPieces", 0), p(this, "tweenInitTime", Date.now()), p(this, "particles", []), p(this, "particlesGenerated", 0), p(this, "removeParticleAt", function(t4) {
              r2.particles.splice(t4, 1);
            }), p(this, "getParticle", function() {
              var t4 = u(r2.x, r2.w + r2.x), e3 = u(r2.y, r2.h + r2.y);
              return new l(r2.context, r2.getOptions, t4, e3);
            }), p(this, "animate", function() {
              var t4 = r2.canvas, e3 = r2.context, n3 = r2.particlesGenerated, i3 = r2.lastNumberOfPieces, o2 = r2.getOptions(), a2 = o2.run, c2 = o2.recycle, s2 = o2.numberOfPieces, u2 = o2.debug, f2 = o2.tweenFunction, h2 = o2.tweenDuration;
              if (!a2)
                return false;
              var l2 = r2.particles.length, p2 = c2 ? l2 : n3, v2 = Date.now();
              if (p2 < s2) {
                i3 !== s2 && (r2.tweenInitTime = v2, r2.lastNumberOfPieces = s2);
                for (var y2 = r2.tweenInitTime, d2 = f2(v2 - y2 > h2 ? h2 : Math.max(0, v2 - y2), p2, s2, h2), b2 = Math.round(d2 - p2), g2 = 0; g2 < b2; g2++)
                  r2.particles.push(r2.getParticle());
                r2.particlesGenerated += b2;
              }
              return u2 && (e3.font = "12px sans-serif", e3.fillStyle = "#333", e3.textAlign = "right", e3.fillText("Particles: ".concat(l2), t4.width - 10, t4.height - 20)), r2.particles.forEach(function(e4, n4) {
                e4.update(), (e4.y > t4.height || e4.y < -100 || e4.x > t4.width + 100 || e4.x < -100) && (c2 && p2 <= s2 ? r2.particles[n4] = r2.getParticle() : r2.removeParticleAt(n4));
              }), l2 > 0 || p2 < s2;
            }), this.canvas = e2;
            var i2 = this.canvas.getContext("2d");
            if (!i2)
              throw new Error("Could not get canvas context");
            this.context = i2, this.getOptions = n2;
          };
          function y(t3, e2) {
            var n2 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(t3);
              e2 && (r2 = r2.filter(function(e3) {
                return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function d(t3) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var n2 = null != arguments[e2] ? arguments[e2] : {};
              e2 % 2 ? y(Object(n2), true).forEach(function(e3) {
                g(t3, e3, n2[e3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : y(Object(n2)).forEach(function(e3) {
                Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(n2, e3));
              });
            }
            return t3;
          }
          function b(t3, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
            }
          }
          function g(t3, e2, n2) {
            return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
          }
          var O = { width: "undefined" != typeof window ? window.innerWidth : 300, height: "undefined" != typeof window ? window.innerHeight : 200, numberOfPieces: 200, friction: 0.99, wind: 0, gravity: 0.1, initialVelocityX: 4, initialVelocityY: 10, colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"], opacity: 1, debug: false, tweenFunction: s.a.easeInOutQuad, tweenDuration: 5e3, recycle: true, run: true }, w = function() {
            function t3(e3, n3) {
              var r3 = this;
              !function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), g(this, "canvas", void 0), g(this, "context", void 0), g(this, "_options", void 0), g(this, "generator", void 0), g(this, "rafId", void 0), g(this, "setOptionsWithDefaults", function(t4) {
                var e4 = { confettiSource: { x: 0, y: 0, w: r3.canvas.width, h: 0 } };
                r3._options = d(d(d({}, e4), O), t4), Object.assign(r3, t4.confettiSource);
              }), g(this, "update", function() {
                var t4 = r3.options, e4 = t4.run, n4 = t4.onConfettiComplete, i3 = r3.canvas, o2 = r3.context;
                e4 && (o2.fillStyle = "white", o2.clearRect(0, 0, i3.width, i3.height)), r3.generator.animate() ? r3.rafId = requestAnimationFrame(r3.update) : (n4 && "function" == typeof n4 && r3.generator.particlesGenerated > 0 && n4.call(r3, r3), r3._options.run = false);
              }), g(this, "reset", function() {
                r3.generator && r3.generator.particlesGenerated > 0 && (r3.generator.particlesGenerated = 0, r3.generator.particles = [], r3.generator.lastNumberOfPieces = 0);
              }), g(this, "stop", function() {
                r3.options = { run: false }, r3.rafId && (cancelAnimationFrame(r3.rafId), r3.rafId = void 0);
              }), this.canvas = e3;
              var i2 = this.canvas.getContext("2d");
              if (!i2)
                throw new Error("Could not get canvas context");
              this.context = i2, this.generator = new v(this.canvas, function() {
                return r3.options;
              }), this.options = n3, this.update();
            }
            var e2, n2, r2;
            return e2 = t3, (n2 = [{ key: "options", get: function() {
              return this._options;
            }, set: function(t4) {
              var e3 = this._options && this._options.run, n3 = this._options && this._options.recycle;
              this.setOptionsWithDefaults(t4), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof t4.recycle && t4.recycle && false === n3 && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof t4.run && t4.run && false === e3 && this.update();
            } }]) && b(e2.prototype, n2), r2 && b(e2, r2), t3;
          }();
          function m(t3) {
            return function(t4) {
              if (Array.isArray(t4))
                return C(t4);
            }(t3) || function(t4) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t4))
                return Array.from(t4);
            }(t3) || S(t3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function x(t3) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            })(t3);
          }
          function P() {
            return (P = Object.assign || function(t3) {
              for (var e2 = 1; e2 < arguments.length; e2++) {
                var n2 = arguments[e2];
                for (var r2 in n2)
                  Object.prototype.hasOwnProperty.call(n2, r2) && (t3[r2] = n2[r2]);
              }
              return t3;
            }).apply(this, arguments);
          }
          function j(t3, e2) {
            var n2 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(t3);
              e2 && (r2 = r2.filter(function(e3) {
                return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function M(t3) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var n2 = null != arguments[e2] ? arguments[e2] : {};
              e2 % 2 ? j(Object(n2), true).forEach(function(e3) {
                T(t3, e3, n2[e3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : j(Object(n2)).forEach(function(e3) {
                Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(n2, e3));
              });
            }
            return t3;
          }
          function I(t3, e2) {
            return function(t4) {
              if (Array.isArray(t4))
                return t4;
            }(t3) || function(t4, e3) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t4)))
                return;
              var n2 = [], r2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, c2 = t4[Symbol.iterator](); !(r2 = (a2 = c2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                  ;
              } catch (t5) {
                i2 = true, o2 = t5;
              } finally {
                try {
                  r2 || null == c2.return || c2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              return n2;
            }(t3, e2) || S(t3, e2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function S(t3, e2) {
            if (t3) {
              if ("string" == typeof t3)
                return C(t3, e2);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? C(t3, e2) : void 0;
            }
          }
          function C(t3, e2) {
            (null == e2 || e2 > t3.length) && (e2 = t3.length);
            for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
              r2[n2] = t3[n2];
            return r2;
          }
          function D(t3, e2) {
            if (!(t3 instanceof e2))
              throw new TypeError("Cannot call a class as a function");
          }
          function E(t3, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
            }
          }
          function _(t3, e2) {
            return (_ = Object.setPrototypeOf || function(t4, e3) {
              return t4.__proto__ = e3, t4;
            })(t3, e2);
          }
          function R(t3) {
            var e2 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), true;
              } catch (t4) {
                return false;
              }
            }();
            return function() {
              var n2, r2 = F(t3);
              if (e2) {
                var i2 = F(this).constructor;
                n2 = Reflect.construct(r2, arguments, i2);
              } else
                n2 = r2.apply(this, arguments);
              return k(this, n2);
            };
          }
          function k(t3, e2) {
            return !e2 || "object" !== x(e2) && "function" != typeof e2 ? A(t3) : e2;
          }
          function A(t3) {
            if (void 0 === t3)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }
          function F(t3) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            })(t3);
          }
          function T(t3, e2, n2) {
            return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
          }
          var B = a.a.createRef(), N = function(t3) {
            !function(t4, e3) {
              if ("function" != typeof e3 && null !== e3)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e3 && _(t4, e3);
            }(o2, t3);
            var e2, n2, r2, i2 = R(o2);
            function o2(t4) {
              var e3;
              D(this, o2);
              for (var n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), c2 = 1; c2 < n3; c2++)
                r3[c2 - 1] = arguments[c2];
              return T(A(e3 = i2.call.apply(i2, [this, t4].concat(r3))), "canvas", a.a.createRef()), T(A(e3), "confetti", void 0), e3.canvas = t4.canvasRef || B, e3;
            }
            return e2 = o2, (n2 = [{ key: "componentDidMount", value: function() {
              if (this.canvas.current) {
                var t4 = q(this.props)[0];
                this.confetti = new w(this.canvas.current, t4);
              }
            } }, { key: "componentDidUpdate", value: function() {
              var t4 = q(this.props)[0];
              this.confetti && (this.confetti.options = t4);
            } }, { key: "componentWillUnmount", value: function() {
              this.confetti && this.confetti.stop(), this.confetti = void 0;
            } }, { key: "render", value: function() {
              var t4 = I(q(this.props), 2), e3 = t4[0], n3 = t4[1], r3 = M({ zIndex: 2, position: "absolute", pointerEvents: "none", top: 0, left: 0, bottom: 0, right: 0 }, n3.style);
              return a.a.createElement("canvas", P({ width: e3.width, height: e3.height, ref: this.canvas }, n3, { style: r3 }));
            } }]) && E(e2.prototype, n2), r2 && E(e2, r2), o2;
          }(o.Component);
          function q(t3) {
            var e2 = {}, n2 = {}, r2 = [].concat(m(Object.keys(O)), ["confettiSource", "drawShape", "onConfettiComplete"]), i2 = ["canvasRef"];
            for (var o2 in t3) {
              var a2 = t3[o2];
              r2.includes(o2) ? e2[o2] = a2 : i2.includes(o2) ? i2[o2] = a2 : n2[o2] = a2;
            }
            return [e2, n2, {}];
          }
          T(N, "defaultProps", M({}, O)), T(N, "displayName", "ReactConfetti");
          var Q = a.a.forwardRef(function(t3, e2) {
            return a.a.createElement(N, P({ canvasRef: e2 }, t3));
          });
          e.default = Q;
        }]).default;
      });
    }
  });

  // app/javascript/App.js
  var import_react = __toESM(require_react());
  var import_react_confetti = __toESM(require_react_confetti_min());
  var colors = ["#62B5ED", "#DD5350", "#2D3D6C", "#D0D048", "#4CA83B"];
  var drawCircle = (ctx) => {
    ctx.beginPath();
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };
  var MyConfetti = ({ hidden = true }) => {
    return /* @__PURE__ */ import_react.default.createElement("div", { role: "presentation", "aria-hidden": true }, /* @__PURE__ */ import_react.default.createElement(
      import_react_confetti.default,
      {
        numberOfPieces: 2e3,
        initialVelocityX: { min: -1, max: 1 },
        initialVelocityY: { min: -10, max: 10 },
        recycle: false,
        drawShape: drawCircle,
        colors,
        run: !hidden,
        onConfettiComplete: () => console.log("Remember to sweep up the confetti!")
      }
    ));
  };
  function App() {
    const [hidden, setHidden] = (0, import_react.useState)(true);
    const [img, setImg] = (0, import_react.useState)("");
    const [submissionValue, setSubmissionValue] = (0, import_react.useState)("");
    const onSubmit = async () => {
      setHidden(false);
      await fetch("profession/submit", {
        method: "POST",
        // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          profession: submissionValue
        })
      });
      const wordCloudResponse = await fetch("profession/word_cloud", {
        method: "GET"
      });
      const imageBlob = await wordCloudResponse.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      window.open(imageObjectURL, "_blank", "height=500,width=500");
      setTimeout(function() {
        window.location.reload();
      }, 4500);
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "App" }, /* @__PURE__ */ import_react.default.createElement("h1", null, "When I grow up, I want to be a/an"), /* @__PURE__ */ import_react.default.createElement("input", { onChange: (event) => setSubmissionValue(event.target.value), type: "text" }), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onSubmit }, "submit"), /* @__PURE__ */ import_react.default.createElement(MyConfetti, { hidden }));
  }
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=assets/App.js.map
