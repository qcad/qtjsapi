
      // auto generated
      //var self;

      // class constructor:
      function QAction() {
        

        // should be QAction_BaseJs.call(this, engine):
        //QAction.prototype = new QAction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAction.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QAction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else {
    
        print("QAction(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //QAction.prototype = new QAction_BaseJs(engine);
      //QAction.prototype = new QAction_Wrapper(engine);
      QAction.prototype = new Object();


      QAction.prototype.toString = function() {
          //return "QAction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAction [JS]";
        };
      QAction.getObjectType = function() {
        return RJSType_QAction.getIdStatic();
      };

      QAction.prototype.getObjectType = function() {
        return RJSType_QAction.getIdStatic();
      };

      QAction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAction.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MenuRole
QAction.NoRole = QAction_Wrapper.NoRole;
QAction.TextHeuristicRole = QAction_Wrapper.TextHeuristicRole;
QAction.ApplicationSpecificRole = QAction_Wrapper.ApplicationSpecificRole;
QAction.AboutQtRole = QAction_Wrapper.AboutQtRole;
QAction.AboutRole = QAction_Wrapper.AboutRole;
QAction.PreferencesRole = QAction_Wrapper.PreferencesRole;
QAction.QuitRole = QAction_Wrapper.QuitRole;

  // enum: Priority
QAction.LowPriority = QAction_Wrapper.LowPriority;
QAction.NormalPriority = QAction_Wrapper.NormalPriority;
QAction.HighPriority = QAction_Wrapper.HighPriority;


      // functions:
      
        // function 
        QAction.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAction.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QAction.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAction.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QAction.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAction.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QAction.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAction.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QAction.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAction.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QAction.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAction.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QAction.prototype.children = function(...args) 
          
        {
          //print("JS: QAction.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QAction.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAction.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QAction.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAction.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QAction.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAction.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QAction.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAction.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QAction.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAction.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QAction.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAction.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QAction.prototype.property = function(...args) 
          
        {
          //print("JS: QAction.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QAction.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAction.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QAction.prototype.parent = function(...args) 
          
        {
          //print("JS: QAction.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QAction.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAction.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QAction.prototype.associatedObjects = function(...args) 
          
        {
          //print("JS: QAction.prototype.associatedObjects");
          
              return this.__PROXY__.associatedObjects(...args);
            
        };
        
        // function 
        QAction.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QAction.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QAction.prototype.setText = function(...args) 
          
        {
          //print("JS: QAction.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QAction.prototype.setIconText = function(...args) 
          
        {
          //print("JS: QAction.prototype.setIconText");
          
              return this.__PROXY__.setIconText(...args);
            
        };
        
        // function 
        QAction.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAction.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QAction.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAction.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QAction.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAction.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QAction.prototype.setPriority = function(...args) 
          
        {
          //print("JS: QAction.prototype.setPriority");
          
              return this.__PROXY__.setPriority(...args);
            
        };
        
        // function 
        QAction.prototype.menu = function(...args) 
          
        {
          //print("JS: QAction.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
        
        // function 
        QAction.prototype.setMenu = function(...args) 
          
        {
          //print("JS: QAction.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
        
        // function 
        QAction.prototype.setSeparator = function(...args) 
          
        {
          //print("JS: QAction.prototype.setSeparator");
          
              return this.__PROXY__.setSeparator(...args);
            
        };
        
        // function 
        QAction.prototype.isSeparator = function(...args) 
          
        {
          //print("JS: QAction.prototype.isSeparator");
          
              return this.__PROXY__.isSeparator(...args);
            
        };
        
        // function 
        QAction.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QAction.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
        
        // function 
        QAction.prototype.setShortcuts = function(...args) 
          
        {
          //print("JS: QAction.prototype.setShortcuts");
          
              return this.__PROXY__.setShortcuts(...args);
            
        };
        
        // function 
        QAction.prototype.shortcuts = function(...args) 
          
        {
          //print("JS: QAction.prototype.shortcuts");
          
              return this.__PROXY__.shortcuts(...args);
            
        };
        
        // function 
        QAction.prototype.setShortcutContext = function(...args) 
          
        {
          //print("JS: QAction.prototype.setShortcutContext");
          
              return this.__PROXY__.setShortcutContext(...args);
            
        };
        
        // function 
        QAction.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QAction.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
        
        // function 
        QAction.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAction.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QAction.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QAction.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
        
        // function 
        QAction.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QAction.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
        
        // function 
        QAction.prototype.data = function(...args) 
          
        {
          //print("JS: QAction.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QAction.prototype.setData = function(...args) 
          
        {
          //print("JS: QAction.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QAction.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QAction.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
        
        // function 
        QAction.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAction.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QAction.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAction.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QAction.prototype.showStatusText = function(...args) 
          
        {
          //print("JS: QAction.prototype.showStatusText");
          
              return this.__PROXY__.showStatusText(...args);
            
        };
        
        // function 
        QAction.prototype.setMenuRole = function(...args) 
          
        {
          //print("JS: QAction.prototype.setMenuRole");
          
              return this.__PROXY__.setMenuRole(...args);
            
        };
        
        // function 
        QAction.prototype.setIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: QAction.prototype.setIconVisibleInMenu");
          
              return this.__PROXY__.setIconVisibleInMenu(...args);
            
        };
        
        // function 
        QAction.prototype.isIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: QAction.prototype.isIconVisibleInMenu");
          
              return this.__PROXY__.isIconVisibleInMenu(...args);
            
        };
        
        // function 
        QAction.prototype.setShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: QAction.prototype.setShortcutVisibleInContextMenu");
          
              return this.__PROXY__.setShortcutVisibleInContextMenu(...args);
            
        };
        
        // function 
        QAction.prototype.isShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: QAction.prototype.isShortcutVisibleInContextMenu");
          
              return this.__PROXY__.isShortcutVisibleInContextMenu(...args);
            
        };
        
        // function 
        QAction.prototype.event = function(...args) 
          
        {
          //print("JS: QAction.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QAction.prototype.trigger = function(...args) 
          
        {
          //print("JS: QAction.prototype.trigger");
          
              return this.__PROXY__.trigger(...args);
            
        };
        
        // function 
        QAction.prototype.hover = function(...args) 
          
        {
          //print("JS: QAction.prototype.hover");
          
              return this.__PROXY__.hover(...args);
            
        };
        
        // function 
        QAction.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QAction.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
        
        // function 
        QAction.prototype.toggle = function(...args) 
          
        {
          //print("JS: QAction.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
        
        // function 
        QAction.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAction.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QAction.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAction.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QAction.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAction.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QAction.prototype.qt_mac_clear_status_text = function(...args) 
          
        {
          //print("JS: QAction.prototype.qt_mac_clear_status_text");
          
              return this.__PROXY__.qt_mac_clear_status_text(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QAction.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'iconText', {
              get: function() {
                  
                      return this.__PROXY__.iconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'shortcutContext', {
              get: function() {
                  
                      return this.__PROXY__.shortcutContext;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutContext(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'menuRole', {
              get: function() {
                  
                      return this.__PROXY__.menuRole;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMenuRole(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'iconVisibleInMenu', {
              get: function() {
                  
                      return this.__PROXY__.isIconVisibleInMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconVisibleInMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'shortcutVisibleInContextMenu', {
              get: function() {
                  
                      return this.__PROXY__.isShortcutVisibleInContextMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutVisibleInContextMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAction.prototype, 'priority', {
              get: function() {
                  
                      return this.__PROXY__.priority;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPriority(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAction.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(QAction.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QAction.prototype, 'triggered(bool)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(QAction.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
        Object.defineProperty(QAction.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QAction.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QAction.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAction.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAction.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      