
      // auto generated
      //var self;

      // class constructor:
      function QWidgetItem() {
        

        // should be QWidgetItem_BaseJs.call(this, engine):
        //QWidgetItem.prototype = new QWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWidgetItem.getIdStatic()))) {

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
            qWarning("QWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QWidgetItem_Wrapper(
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

      

        //copyProperties(this, wrapper, QWidgetItem);
  }

  
  else {
    
        print("QWidgetItem(): wrong number / type of arguments");
      
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

      //QWidgetItem.prototype = new QWidgetItem_BaseJs(engine);
      //QWidgetItem.prototype = new QWidgetItem_Wrapper(engine);
      QWidgetItem.prototype = new Object();


      QWidgetItem.prototype.toString = function() {
          //return "QWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWidgetItem [JS]";
        };
      QWidgetItem.getObjectType = function() {
        return RJSType_QWidgetItem.getIdStatic();
      };

      QWidgetItem.prototype.getObjectType = function() {
        return RJSType_QWidgetItem.getIdStatic();
      };

      QWidgetItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWidgetItem.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QWidgetItem.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.layout = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.alignment = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.geometry = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.widget = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
    
        // function 
        QWidgetItem.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QWidgetItem.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
    

      // static functions:
      QWidgetItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QWidgetItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QWidgetItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QWidgetItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      