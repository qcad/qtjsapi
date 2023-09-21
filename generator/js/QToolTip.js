
      // auto generated
      //var self;

      // class constructor:
      function QToolTip() {
        

        // should be QToolTip_BaseJs.call(this, engine):
        //QToolTip.prototype = new QToolTip_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QToolTip_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QToolTip);
            //}
          }
          else {
            qWarning("QToolTip.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QToolTip.js: No constructor found for class QToolTip");
            
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

      //QToolTip.prototype = new QToolTip_BaseJs(engine);
      //QToolTip.prototype = new QToolTip_Wrapper(engine);
      QToolTip.prototype = new Object();

      QToolTip.prototype.toString = function() {
          //return "QToolTip [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QToolTip [JS]";
        };
      QToolTip.getObjectType = function() {
        
            return RJSType.QToolTip_Type;
          
      };

      QToolTip.prototype.getObjectType = function() {
        
            return RJSType.QToolTip_Type;
          
      };

      QToolTip.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QToolTip_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QToolTip_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QToolTip.showText = function() 
          
        {
          //print("JS: QToolTip.showText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.showText(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.showText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.hideText = function() 
          
        {
          //print("JS: QToolTip.hideText");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.hideText(
                  
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.hideText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.isVisible = function() 
          
        {
          //print("JS: QToolTip.isVisible");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.isVisible(
                  
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.isVisible(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.text = function() 
          
        {
          //print("JS: QToolTip.text");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.text(
                  
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.text(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.palette = function() 
          
        {
          //print("JS: QToolTip.palette");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.palette(
                  
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.palette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.setPalette = function() 
          
        {
          //print("JS: QToolTip.setPalette");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.setPalette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.setPalette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.font = function() 
          
        {
          //print("JS: QToolTip.font");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.font(
                  
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.font(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QToolTip.setFont = function() 
          
        {
          //print("JS: QToolTip.setFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QToolTip_WrapperSingletonInstance.setFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QToolTip);
  }

  
  else {
    
        print("QToolTip.setFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QToolTip.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QToolTip.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    