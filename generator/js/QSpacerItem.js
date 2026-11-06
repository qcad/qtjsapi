
      // auto generated
      //var self;

      // class constructor:
      function QSpacerItem() {
        

        // should be QSpacerItem_BaseJs.call(this, engine):
        //QSpacerItem.prototype = new QSpacerItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSpacerItem.getIdStatic()))) {

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
            qWarning("QSpacerItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QSpacerItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSpacerItem);
  }

  
  else {
    
        print("QSpacerItem(): wrong number / type of arguments");
      
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

      //QSpacerItem.prototype = new QSpacerItem_BaseJs(engine);
      //QSpacerItem.prototype = new QSpacerItem_Wrapper(engine);
      QSpacerItem.prototype = new Object();


      QSpacerItem.prototype.toString = function() {
          //return "QSpacerItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSpacerItem [JS]";
        };
      QSpacerItem.getObjectType = function() {
        return RJSType_QSpacerItem.getIdStatic();
      };

      QSpacerItem.prototype.getObjectType = function() {
        return RJSType_QSpacerItem.getIdStatic();
      };

      QSpacerItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSpacerItem.getIdStatic()) {
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
        QSpacerItem.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.widget = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.layout = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.alignment = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.changeSize = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.changeSize");
          
              return this.__PROXY__.changeSize(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.geometry = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
    
        // function 
        QSpacerItem.prototype.sizePolicy = function(...args) 
          
        {
          //print("JS: QSpacerItem.prototype.sizePolicy");
          
              return this.__PROXY__.sizePolicy(...args);
            
        };
    

      // static functions:
      QSpacerItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSpacerItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSpacerItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSpacerItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSpacerItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSpacerItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      