
      // auto generated
      //var self;

      // class constructor:
      function QLayout() {
        

        // should be QLayout_BaseJs.call(this, engine):
        //QLayout.prototype = new QLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QLayout_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLayout);
            //}
          }
          else {
            qWarning("QLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QLayout.prototype = new QLayout_BaseJs(engine);
      //QLayout.prototype = new QLayout_Wrapper(engine);
      QLayout.prototype = new Object();

      QLayout.prototype.toString = function() {
          //return "QLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLayout [JS]";
        };
      QLayout.getObjectType = function() {
        
            return RJSType.QLayout_Type;
          
      };

      QLayout.prototype.getObjectType = function() {
        
            return RJSType.QLayout_Type;
          
      };

      QLayout.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QLayout_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QLayoutItem_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QLayout_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QLayoutItem_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QLayout.prototype.sizeHint = function() 
          
        {
          //print("JS: QLayout.prototype.sizeHint");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.sizeHint(
                // call highest level JS implementation:
                //return this.sizeHintBase(
                return this.sizeHintSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.sizeHint(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.addItem = function() 
          
        {
          //print("JS: QLayout.prototype.addItem");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.addItem(
                // call highest level JS implementation:
                //return this.addItemBase(
                return this.addItemSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.addItem(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.minimumSize = function() 
          
        {
          //print("JS: QLayout.prototype.minimumSize");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.minimumSize(
                // call highest level JS implementation:
                //return this.minimumSizeBase(
                return this.minimumSizeSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.minimumSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.setGeometry = function() 
          
        {
          //print("JS: QLayout.prototype.setGeometry");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setGeometry(
                // call highest level JS implementation:
                //return this.setGeometryBase(
                return this.setGeometrySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.setGeometry(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.itemAt = function() 
          
        {
          //print("JS: QLayout.prototype.itemAt");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.itemAt(
                // call highest level JS implementation:
                //return this.itemAtBase(
                return this.itemAtSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.itemAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.takeAt = function() 
          
        {
          //print("JS: QLayout.prototype.takeAt");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.takeAt(
                // call highest level JS implementation:
                //return this.takeAtBase(
                return this.takeAtSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.takeAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        QLayout.prototype.count = function() 
          
        {
          //print("JS: QLayout.prototype.count");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.count(
                // call highest level JS implementation:
                //return this.countBase(
                return this.countSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.count(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QLayout.tr = function() 
          
        {
          //print("JS: QLayout.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QLayout_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QLayout.activateRecursiveHelper");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    