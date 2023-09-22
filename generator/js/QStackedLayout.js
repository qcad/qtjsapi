
      // auto generated
      //var self;

      // class constructor:
      function QStackedLayout() {
        

        // should be QStackedLayout_BaseJs.call(this, engine):
        //QStackedLayout.prototype = new QStackedLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QStackedLayout.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QStackedLayout);
            //}
          }
          else {
            qWarning("QStackedLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStackedLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStackedLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStackedLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else {
    
        print("QStackedLayout(): wrong number / type of arguments");
      
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
            
    this["widgetRemoved(int)"] = Object.getPrototypeOf(this).widgetRemoved;
  
    this["currentChanged(int)"] = Object.getPrototypeOf(this).currentChanged;
  
          }
        }
      }

      //QStackedLayout.prototype = new QStackedLayout_BaseJs(engine);
      //QStackedLayout.prototype = new QStackedLayout_Wrapper(engine);
      QStackedLayout.prototype = new Object();

      QStackedLayout.prototype.toString = function() {
          //return "QStackedLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStackedLayout [JS]";
        };
      QStackedLayout.getObjectType = function() {
        
            return RJSType_QStackedLayout.getIdStatic();
          
      };

      QStackedLayout.prototype.getObjectType = function() {
        
            return RJSType_QStackedLayout.getIdStatic();
          
      };

      QStackedLayout.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QStackedLayout.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: StackingMode
QStackedLayout.StackOne = QStackedLayout_Wrapper.StackOne;
QStackedLayout.StackAll = QStackedLayout_Wrapper.StackAll;


      // functions:
      

      // static functions:
      

        // static function 
        QStackedLayout.tr = function() 
          
        {
          //print("JS: QStackedLayout.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QStackedLayout_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else {
    
        print("QStackedLayout.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStackedLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QStackedLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QStackedLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else {
    
        print("QStackedLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStackedLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QStackedLayout.activateRecursiveHelper");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStackedLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStackedLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    