
      // auto generated
      //var self;

      // class constructor:
      function QWidgetAction() {
        

        // should be QWidgetAction_BaseJs.call(this, engine):
        //QWidgetAction.prototype = new QWidgetAction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWidgetAction.getIdStatic()))) {

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
            qWarning("QWidgetAction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QWidgetAction_Wrapper(
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

      

        //copyProperties(this, wrapper, QWidgetAction);
  }

  
  else {
    
        print("QWidgetAction(): wrong number / type of arguments");
      
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

      //QWidgetAction.prototype = new QWidgetAction_BaseJs(engine);
      //QWidgetAction.prototype = new QWidgetAction_Wrapper(engine);
      QWidgetAction.prototype = new Object();


      QWidgetAction.prototype.toString = function() {
          //return "QWidgetAction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWidgetAction [JS]";
        };
      QWidgetAction.getObjectType = function() {
        return RJSType_QWidgetAction.getIdStatic();
      };

      QWidgetAction.prototype.getObjectType = function() {
        return RJSType_QWidgetAction.getIdStatic();
      };

      QWidgetAction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWidgetAction.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAction.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MenuRole
QWidgetAction.NoRole = QWidgetAction_Wrapper.NoRole;
QWidgetAction.TextHeuristicRole = QWidgetAction_Wrapper.TextHeuristicRole;
QWidgetAction.ApplicationSpecificRole = QWidgetAction_Wrapper.ApplicationSpecificRole;
QWidgetAction.AboutQtRole = QWidgetAction_Wrapper.AboutQtRole;
QWidgetAction.AboutRole = QWidgetAction_Wrapper.AboutRole;
QWidgetAction.PreferencesRole = QWidgetAction_Wrapper.PreferencesRole;
QWidgetAction.QuitRole = QWidgetAction_Wrapper.QuitRole;

  // enum: Priority
QWidgetAction.LowPriority = QWidgetAction_Wrapper.LowPriority;
QWidgetAction.NormalPriority = QWidgetAction_Wrapper.NormalPriority;
QWidgetAction.HighPriority = QWidgetAction_Wrapper.HighPriority;


      // functions:
      
        // function 
        QWidgetAction.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.findChild = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.children = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setParent = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.property = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.parent = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.associatedObjects = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.associatedObjects");
          
              return this.__PROXY__.associatedObjects(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setText = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setIconText = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setIconText");
          
              return this.__PROXY__.setIconText(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setPriority = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setPriority");
          
              return this.__PROXY__.setPriority(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.menu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setMenu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setSeparator = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setSeparator");
          
              return this.__PROXY__.setSeparator(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isSeparator = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isSeparator");
          
              return this.__PROXY__.isSeparator(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setShortcuts = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setShortcuts");
          
              return this.__PROXY__.setShortcuts(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.shortcuts = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.shortcuts");
          
              return this.__PROXY__.shortcuts(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setShortcutContext = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setShortcutContext");
          
              return this.__PROXY__.setShortcutContext(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setFont = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.data = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setData = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.showStatusText = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.showStatusText");
          
              return this.__PROXY__.showStatusText(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setMenuRole = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setMenuRole");
          
              return this.__PROXY__.setMenuRole(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setIconVisibleInMenu");
          
              return this.__PROXY__.setIconVisibleInMenu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isIconVisibleInMenu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isIconVisibleInMenu");
          
              return this.__PROXY__.isIconVisibleInMenu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setShortcutVisibleInContextMenu");
          
              return this.__PROXY__.setShortcutVisibleInContextMenu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.isShortcutVisibleInContextMenu = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.isShortcutVisibleInContextMenu");
          
              return this.__PROXY__.isShortcutVisibleInContextMenu(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.event = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.trigger = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.trigger");
          
              return this.__PROXY__.trigger(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.hover = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.hover");
          
              return this.__PROXY__.hover(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.toggle = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.qt_mac_clear_status_text = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.qt_mac_clear_status_text");
          
              return this.__PROXY__.qt_mac_clear_status_text(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.setDefaultWidget = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.setDefaultWidget");
          
              return this.__PROXY__.setDefaultWidget(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.defaultWidget = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.defaultWidget");
          
              return this.__PROXY__.defaultWidget(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.requestWidget = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.requestWidget");
          
              return this.__PROXY__.requestWidget(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.releaseWidget = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.releaseWidget");
          
              return this.__PROXY__.releaseWidget(...args);
            
        };
        
        // function 
        QWidgetAction.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QWidgetAction.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QWidgetAction.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'iconText', {
              get: function() {
                  
                      return this.__PROXY__.iconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'shortcutContext', {
              get: function() {
                  
                      return this.__PROXY__.shortcutContext;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutContext(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'menuRole', {
              get: function() {
                  
                      return this.__PROXY__.menuRole;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMenuRole(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'iconVisibleInMenu', {
              get: function() {
                  
                      return this.__PROXY__.isIconVisibleInMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconVisibleInMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'shortcutVisibleInContextMenu', {
              get: function() {
                  
                      return this.__PROXY__.isShortcutVisibleInContextMenu();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcutVisibleInContextMenu(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidgetAction.prototype, 'priority', {
              get: function() {
                  
                      return this.__PROXY__.priority;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPriority(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QWidgetAction.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(QWidgetAction.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QWidgetAction.prototype, 'triggered(bool)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(QWidgetAction.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
        Object.defineProperty(QWidgetAction.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QWidgetAction.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QWidgetAction.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QWidgetAction.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QWidgetAction.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWidgetAction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWidgetAction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QWidgetAction.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      