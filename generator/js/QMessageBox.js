
      // auto generated
      //var self;

      // class constructor:
      function QMessageBox() {
        

        // should be QMessageBox_BaseJs.call(this, engine):
        //QMessageBox.prototype = new QMessageBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMessageBox.getIdStatic()))) {

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
            qWarning("QMessageBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QMessageBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMessageBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox(): wrong number / type of arguments");
      
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

      //QMessageBox.prototype = new QMessageBox_BaseJs(engine);
      //QMessageBox.prototype = new QMessageBox_Wrapper(engine);
      QMessageBox.prototype = new Object();


      QMessageBox.prototype.toString = function() {
          //return "QMessageBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMessageBox [JS]";
        };
      QMessageBox.getObjectType = function() {
        return RJSType_QMessageBox.getIdStatic();
      };

      QMessageBox.prototype.getObjectType = function() {
        return RJSType_QMessageBox.getIdStatic();
      };

      QMessageBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMessageBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDialog.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DialogCode
QMessageBox.Rejected = QMessageBox_Wrapper.Rejected;
QMessageBox.Accepted = QMessageBox_Wrapper.Accepted;

  // enum: Icon
QMessageBox.NoIcon = QMessageBox_Wrapper.NoIcon;
QMessageBox.Information = QMessageBox_Wrapper.Information;
QMessageBox.Warning = QMessageBox_Wrapper.Warning;
QMessageBox.Critical = QMessageBox_Wrapper.Critical;
QMessageBox.Question = QMessageBox_Wrapper.Question;

  // enum: ButtonRole
QMessageBox.InvalidRole = QMessageBox_Wrapper.InvalidRole;
QMessageBox.AcceptRole = QMessageBox_Wrapper.AcceptRole;
QMessageBox.RejectRole = QMessageBox_Wrapper.RejectRole;
QMessageBox.DestructiveRole = QMessageBox_Wrapper.DestructiveRole;
QMessageBox.ActionRole = QMessageBox_Wrapper.ActionRole;
QMessageBox.HelpRole = QMessageBox_Wrapper.HelpRole;
QMessageBox.YesRole = QMessageBox_Wrapper.YesRole;
QMessageBox.NoRole = QMessageBox_Wrapper.NoRole;
QMessageBox.ResetRole = QMessageBox_Wrapper.ResetRole;
QMessageBox.ApplyRole = QMessageBox_Wrapper.ApplyRole;
QMessageBox.NRoles = QMessageBox_Wrapper.NRoles;

  // enum: StandardButton
QMessageBox.NoButton = QMessageBox_Wrapper.NoButton;
QMessageBox.Ok = QMessageBox_Wrapper.Ok;
QMessageBox.Save = QMessageBox_Wrapper.Save;
QMessageBox.SaveAll = QMessageBox_Wrapper.SaveAll;
QMessageBox.Open = QMessageBox_Wrapper.Open;
QMessageBox.Yes = QMessageBox_Wrapper.Yes;
QMessageBox.YesToAll = QMessageBox_Wrapper.YesToAll;
QMessageBox.No = QMessageBox_Wrapper.No;
QMessageBox.NoToAll = QMessageBox_Wrapper.NoToAll;
QMessageBox.Abort = QMessageBox_Wrapper.Abort;
QMessageBox.Retry = QMessageBox_Wrapper.Retry;
QMessageBox.Ignore = QMessageBox_Wrapper.Ignore;
QMessageBox.Close = QMessageBox_Wrapper.Close;
QMessageBox.Cancel = QMessageBox_Wrapper.Cancel;
QMessageBox.Discard = QMessageBox_Wrapper.Discard;
QMessageBox.Help = QMessageBox_Wrapper.Help;
QMessageBox.Apply = QMessageBox_Wrapper.Apply;
QMessageBox.Reset = QMessageBox_Wrapper.Reset;
QMessageBox.RestoreDefaults = QMessageBox_Wrapper.RestoreDefaults;
QMessageBox.FirstButton = QMessageBox_Wrapper.FirstButton;
QMessageBox.LastButton = QMessageBox_Wrapper.LastButton;
QMessageBox.YesAll = QMessageBox_Wrapper.YesAll;
QMessageBox.NoAll = QMessageBox_Wrapper.NoAll;
QMessageBox.Default = QMessageBox_Wrapper.Default;
QMessageBox.Escape = QMessageBox_Wrapper.Escape;
QMessageBox.FlagMask = QMessageBox_Wrapper.FlagMask;
QMessageBox.ButtonMask = QMessageBox_Wrapper.ButtonMask;


      // functions:
      
        // function 
        QMessageBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QMessageBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QMessageBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QMessageBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QMessageBox.prototype.children = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QMessageBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QMessageBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QMessageBox.prototype.property = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QMessageBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QMessageBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QMessageBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QMessageBox.prototype.window = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QMessageBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QMessageBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QMessageBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QMessageBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QMessageBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QMessageBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QMessageBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QMessageBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QMessageBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QMessageBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QMessageBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QMessageBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QMessageBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QMessageBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QMessageBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QMessageBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QMessageBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QMessageBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.update = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QMessageBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QMessageBox.prototype.show = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QMessageBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QMessageBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QMessageBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QMessageBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.close = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QMessageBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QMessageBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QMessageBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QMessageBox.prototype.move = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QMessageBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QMessageBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QMessageBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QMessageBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QMessageBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QMessageBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QMessageBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QMessageBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QMessageBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QMessageBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QMessageBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QMessageBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QMessageBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QMessageBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QMessageBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QMessageBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QMessageBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QMessageBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QMessageBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QMessageBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QMessageBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QMessageBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QMessageBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QMessageBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QMessageBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QMessageBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QMessageBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QMessageBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QMessageBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QMessageBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QMessageBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QMessageBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QMessageBox.prototype.create = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QMessageBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QMessageBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QMessageBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QMessageBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QMessageBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QMessageBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QMessageBox.prototype.result = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.result");
          
              return this.__PROXY__.result(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setModal = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setModal");
          
              return this.__PROXY__.setModal(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setResult = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setResult");
          
              return this.__PROXY__.setResult(...args);
            
        };
        
        // function 
        QMessageBox.prototype.done = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.done");
          
              return this.__PROXY__.done(...args);
            
        };
        
        // function 
        QMessageBox.prototype.accept = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
        
        // function 
        QMessageBox.prototype.reject = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.reject");
          
              return this.__PROXY__.reject(...args);
            
        };
        
        // function 
        QMessageBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        QMessageBox.prototype.adjustPosition = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.adjustPosition");
          
              return this.__PROXY__.adjustPosition(...args);
            
        };
        
        // function 
        QMessageBox.prototype.addButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.addButton");
          
              return this.__PROXY__.addButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.removeButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.removeButton");
          
              return this.__PROXY__.removeButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.open = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QMessageBox.prototype.buttons = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.buttons");
          
              return this.__PROXY__.buttons(...args);
            
        };
        
        // function 
        QMessageBox.prototype.buttonRole = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.buttonRole");
          
              return this.__PROXY__.buttonRole(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setStandardButtons = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setStandardButtons");
          
              return this.__PROXY__.setStandardButtons(...args);
            
        };
        
        // function 
        QMessageBox.prototype.standardButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.standardButton");
          
              return this.__PROXY__.standardButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.button = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.button");
          
              return this.__PROXY__.button(...args);
            
        };
        
        // function 
        QMessageBox.prototype.defaultButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.defaultButton");
          
              return this.__PROXY__.defaultButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setDefaultButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setDefaultButton");
          
              return this.__PROXY__.setDefaultButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.escapeButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.escapeButton");
          
              return this.__PROXY__.escapeButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setEscapeButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setEscapeButton");
          
              return this.__PROXY__.setEscapeButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.clickedButton = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.clickedButton");
          
              return this.__PROXY__.clickedButton(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setText = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setIconPixmap = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setIconPixmap");
          
              return this.__PROXY__.setIconPixmap(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setTextFormat = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setTextFormat");
          
              return this.__PROXY__.setTextFormat(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setCheckBox = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setCheckBox");
          
              return this.__PROXY__.setCheckBox(...args);
            
        };
        
        // function 
        QMessageBox.prototype.checkBox = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.checkBox");
          
              return this.__PROXY__.checkBox(...args);
            
        };
        
        // function 
        QMessageBox.prototype.information = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.information");
          
              return this.__PROXY__.information(...args);
            
        };
        
        // function 
        QMessageBox.prototype.question = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.question");
          
              return this.__PROXY__.question(...args);
            
        };
        
        // function 
        QMessageBox.prototype.warning = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.warning");
          
              return this.__PROXY__.warning(...args);
            
        };
        
        // function 
        QMessageBox.prototype.critical = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.critical");
          
              return this.__PROXY__.critical(...args);
            
        };
        
        // function 
        QMessageBox.prototype.about = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.about");
          
              return this.__PROXY__.about(...args);
            
        };
        
        // function 
        QMessageBox.prototype.aboutQt = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.aboutQt");
          
              return this.__PROXY__.aboutQt(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setInformativeText = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setInformativeText");
          
              return this.__PROXY__.setInformativeText(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setDetailedText = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setDetailedText");
          
              return this.__PROXY__.setDetailedText(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QMessageBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QMessageBox.prototype.exec = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QMessageBox.prototype.event = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QMessageBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QMessageBox.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QMessageBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QMessageBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMessageBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        

      // static functions:
      

        // static function 
        QMessageBox.information = function() 
          
        {
          //print("JS: QMessageBox.information");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.information(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.information(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.information(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.question = function() 
          
        {
          //print("JS: QMessageBox.question");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.question(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.question(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.question(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.warning = function() 
          
        {
          //print("JS: QMessageBox.warning");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.warning(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.warning(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.warning(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.critical = function() 
          
        {
          //print("JS: QMessageBox.critical");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.critical(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else 
  
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.critical(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.critical(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.about = function() 
          
        {
          //print("JS: QMessageBox.about");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.about(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.about(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMessageBox.aboutQt = function() 
          
        {
          //print("JS: QMessageBox.aboutQt");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QMessageBox_WrapperSingletonInstance.aboutQt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMessageBox);
  }

  
  else {
    
        print("QMessageBox.aboutQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QMessageBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'iconPixmap', {
              get: function() {
                  
                      return this.__PROXY__.iconPixmap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconPixmap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'textFormat', {
              get: function() {
                  
                      return this.__PROXY__.textFormat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextFormat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'standardButtons', {
              get: function() {
                  
                      return this.__PROXY__.standardButtons;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStandardButtons(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'detailedText', {
              get: function() {
                  
                      return this.__PROXY__.detailedText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDetailedText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'informativeText', {
              get: function() {
                  
                      return this.__PROXY__.informativeText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInformativeText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMessageBox.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMessageBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMessageBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMessageBox.prototype, 'finished', {
            get: function() { return this.__PROXY__.finished; },
            configurable: true
        });
        
          Object.defineProperty(QMessageBox.prototype, 'finished(int)', {
              get: function() { return this.__PROXY__.finished; },
              configurable: true
          });
        
        Object.defineProperty(QMessageBox.prototype, 'accepted', {
            get: function() { return this.__PROXY__.accepted; },
            configurable: true
        });
        
        Object.defineProperty(QMessageBox.prototype, 'rejected', {
            get: function() { return this.__PROXY__.rejected; },
            configurable: true
        });
        
        Object.defineProperty(QMessageBox.prototype, 'buttonClicked', {
            get: function() { return this.__PROXY__.buttonClicked; },
            configurable: true
        });
        
          Object.defineProperty(QMessageBox.prototype, 'buttonClicked(QAbstractButton*)', {
              get: function() { return this.__PROXY__.buttonClicked; },
              configurable: true
          });
        QMessageBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMessageBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMessageBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMessageBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMessageBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMessageBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      