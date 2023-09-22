
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
            arguments[2].getWrappedType()===
              
                  RJSType_QWidgetAction.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QWidgetAction);
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
          

        copyProperties(this, wrapper, QWidgetAction);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["triggered(bool)"] = Object.getPrototypeOf(this).triggered;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
          }
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
      

      // static functions:
      

        // static function 
        QWidgetAction.tr = function() 
          
        {
          //print("JS: QWidgetAction.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QWidgetAction_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QWidgetAction);
  }

  
  else {
    
        print("QWidgetAction.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    