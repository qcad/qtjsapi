
      // auto generated
      //var self;

      // class constructor:
      function QSplitterHandle() {
        

        // should be QSplitterHandle_BaseJs.call(this, engine):
        //QSplitterHandle.prototype = new QSplitterHandle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSplitterHandle.getIdStatic()))) {

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
            qWarning("QSplitterHandle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSplitterHandle_Wrapper(
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

      

        //copyProperties(this, wrapper, QSplitterHandle);
  }

  
  else {
    
        print("QSplitterHandle(): wrong number / type of arguments");
      
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

      //QSplitterHandle.prototype = new QSplitterHandle_BaseJs(engine);
      //QSplitterHandle.prototype = new QSplitterHandle_Wrapper(engine);
      QSplitterHandle.prototype = new Object();


      QSplitterHandle.prototype.toString = function() {
          //return "QSplitterHandle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplitterHandle [JS]";
        };
      QSplitterHandle.getObjectType = function() {
        return RJSType_QSplitterHandle.getIdStatic();
      };

      QSplitterHandle.prototype.getObjectType = function() {
        return RJSType_QSplitterHandle.getIdStatic();
      };

      QSplitterHandle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSplitterHandle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSplitterHandle.prototype.devType = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isModal = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.window = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFont = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setMask = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mask = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.grab = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.update = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.repaint = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.show = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hide = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.close = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.raise = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.lower = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.move = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.resize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.windowState = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.layout = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.scroll = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.addAction = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.addActions = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.actions = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.windowType = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.childAt = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.metric = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.redirected = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.create = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.destroy = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.orientation = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.opaqueResize = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.opaqueResize");
          
              return this.__PROXY__.opaqueResize(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.splitter = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.splitter");
          
              return this.__PROXY__.splitter(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QSplitterHandle.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QSplitterHandle.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QSplitterHandle.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QSplitterHandle.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QSplitterHandle.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QSplitterHandle.prototype.event = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.moveSplitter = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.moveSplitter");
          
              return this.__PROXY__.moveSplitter(...args);
            
        };
        
        // function 
        QSplitterHandle.prototype.closestLegalPosition = function(...args) 
          
        {
          //print("JS: QSplitterHandle.prototype.closestLegalPosition");
          
              return this.__PROXY__.closestLegalPosition(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QSplitterHandle.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplitterHandle.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSplitterHandle.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QSplitterHandle.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QSplitterHandle.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSplitterHandle.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSplitterHandle.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplitterHandle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplitterHandle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSplitterHandle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      