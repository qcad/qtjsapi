
      // auto generated
      //var self;

      // class constructor:
      function QDialogButtonBox() {
        

        // should be QDialogButtonBox_BaseJs.call(this, engine):
        //QDialogButtonBox.prototype = new QDialogButtonBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDialogButtonBox.getIdStatic()))) {

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
            qWarning("QDialogButtonBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDialogButtonBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QDialogButtonBox);
  }

  
  else {
    
        print("QDialogButtonBox(): wrong number / type of arguments");
      
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

      //QDialogButtonBox.prototype = new QDialogButtonBox_BaseJs(engine);
      //QDialogButtonBox.prototype = new QDialogButtonBox_Wrapper(engine);
      QDialogButtonBox.prototype = new Object();


      QDialogButtonBox.prototype.toString = function() {
          //return "QDialogButtonBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDialogButtonBox [JS]";
        };
      QDialogButtonBox.getObjectType = function() {
        return RJSType_QDialogButtonBox.getIdStatic();
      };

      QDialogButtonBox.prototype.getObjectType = function() {
        return RJSType_QDialogButtonBox.getIdStatic();
      };

      QDialogButtonBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDialogButtonBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ButtonRole
QDialogButtonBox.InvalidRole = QDialogButtonBox_Wrapper.InvalidRole;
QDialogButtonBox.AcceptRole = QDialogButtonBox_Wrapper.AcceptRole;
QDialogButtonBox.RejectRole = QDialogButtonBox_Wrapper.RejectRole;
QDialogButtonBox.DestructiveRole = QDialogButtonBox_Wrapper.DestructiveRole;
QDialogButtonBox.ActionRole = QDialogButtonBox_Wrapper.ActionRole;
QDialogButtonBox.HelpRole = QDialogButtonBox_Wrapper.HelpRole;
QDialogButtonBox.YesRole = QDialogButtonBox_Wrapper.YesRole;
QDialogButtonBox.NoRole = QDialogButtonBox_Wrapper.NoRole;
QDialogButtonBox.ResetRole = QDialogButtonBox_Wrapper.ResetRole;
QDialogButtonBox.ApplyRole = QDialogButtonBox_Wrapper.ApplyRole;
QDialogButtonBox.NRoles = QDialogButtonBox_Wrapper.NRoles;

  // enum: StandardButton
QDialogButtonBox.NoButton = QDialogButtonBox_Wrapper.NoButton;
QDialogButtonBox.Ok = QDialogButtonBox_Wrapper.Ok;
QDialogButtonBox.Save = QDialogButtonBox_Wrapper.Save;
QDialogButtonBox.SaveAll = QDialogButtonBox_Wrapper.SaveAll;
QDialogButtonBox.Open = QDialogButtonBox_Wrapper.Open;
QDialogButtonBox.Yes = QDialogButtonBox_Wrapper.Yes;
QDialogButtonBox.YesToAll = QDialogButtonBox_Wrapper.YesToAll;
QDialogButtonBox.No = QDialogButtonBox_Wrapper.No;
QDialogButtonBox.NoToAll = QDialogButtonBox_Wrapper.NoToAll;
QDialogButtonBox.Abort = QDialogButtonBox_Wrapper.Abort;
QDialogButtonBox.Retry = QDialogButtonBox_Wrapper.Retry;
QDialogButtonBox.Ignore = QDialogButtonBox_Wrapper.Ignore;
QDialogButtonBox.Close = QDialogButtonBox_Wrapper.Close;
QDialogButtonBox.Cancel = QDialogButtonBox_Wrapper.Cancel;
QDialogButtonBox.Discard = QDialogButtonBox_Wrapper.Discard;
QDialogButtonBox.Help = QDialogButtonBox_Wrapper.Help;
QDialogButtonBox.Apply = QDialogButtonBox_Wrapper.Apply;
QDialogButtonBox.Reset = QDialogButtonBox_Wrapper.Reset;
QDialogButtonBox.RestoreDefaults = QDialogButtonBox_Wrapper.RestoreDefaults;
QDialogButtonBox.FirstButton = QDialogButtonBox_Wrapper.FirstButton;
QDialogButtonBox.LastButton = QDialogButtonBox_Wrapper.LastButton;

  // enum: ButtonLayout
QDialogButtonBox.WinLayout = QDialogButtonBox_Wrapper.WinLayout;
QDialogButtonBox.MacLayout = QDialogButtonBox_Wrapper.MacLayout;
QDialogButtonBox.KdeLayout = QDialogButtonBox_Wrapper.KdeLayout;
QDialogButtonBox.GnomeLayout = QDialogButtonBox_Wrapper.GnomeLayout;
QDialogButtonBox.AndroidLayout = QDialogButtonBox_Wrapper.AndroidLayout;


      // functions:
      
        // function 
        QDialogButtonBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.children = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.property = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.window = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.update = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.show = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.close = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.move = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.create = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.orientation = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.addButton = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.addButton");
          
              return this.__PROXY__.addButton(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.removeButton = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.removeButton");
          
              return this.__PROXY__.removeButton(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.buttons = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.buttons");
          
              return this.__PROXY__.buttons(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.buttonRole = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.buttonRole");
          
              return this.__PROXY__.buttonRole(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setStandardButtons = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setStandardButtons");
          
              return this.__PROXY__.setStandardButtons(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.standardButtons = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.standardButtons");
          
              return this.__PROXY__.standardButtons(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.standardButton = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.standardButton");
          
              return this.__PROXY__.standardButton(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.button = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.button");
          
              return this.__PROXY__.button(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.setCenterButtons = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.setCenterButtons");
          
              return this.__PROXY__.setCenterButtons(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.centerButtons = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.centerButtons");
          
              return this.__PROXY__.centerButtons(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QDialogButtonBox.prototype.event = function(...args) 
          
        {
          //print("JS: QDialogButtonBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QDialogButtonBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDialogButtonBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QDialogButtonBox.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QDialogButtonBox.prototype, 'clicked(QAbstractButton*)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QDialogButtonBox.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QDialogButtonBox.prototype, 'helpRequested', {
            get: function() { return this.__PROXY__.helpRequested; },
            configurable: true
        });
        
        Object.defineProperty(QDialogButtonBox.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        QDialogButtonBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDialogButtonBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDialogButtonBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDialogButtonBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDialogButtonBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDialogButtonBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      