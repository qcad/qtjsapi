
  // Auto generated
  
    #ifndef QPRINTERINFO_H_WRAPPER
    #define QPRINTERINFO_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QPrinterInfo>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QPrinterInfo_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPrinterInfo_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QPrinterInfo
    // Function: availablePrinterNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  availablePrinterNames
              (

                
              )
              
              ;
            
    // Class: QPrinterInfo
    // Function: availablePrinters
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  availablePrinters
              (

                
              )
              
              ;
            
    // Class: QPrinterInfo
    // Function: defaultPrinterName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultPrinterName
              (

                
              )
              
              ;
            
    // Class: QPrinterInfo
    // Function: defaultPrinter
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultPrinter
              (

                
              )
              
              ;
            
    // Class: QPrinterInfo
    // Function: printerInfo
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  printerInfo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif


      private:
          RJSApi& handler;
          //static QPrinterInfo_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPrinterInfo
    class QTJSAPI_EXPORT QPrinterInfo_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPrinterInfo_Wrapper(const QPrinterInfo_Wrapper&);

    public:
      // initialization of QPrinterInfo:
      static void init(RJSApi& handler);

      
        static QPrinterInfo* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QPrinterInfo:
          for (int i=0; i<basecasters_QPrinterInfo.length(); i++) {
            RJSBasecaster_QPrinterInfo* basecaster = basecasters_QPrinterInfo[i];
            QPrinterInfo* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QPrinterInfo:
          if (t==RJSType_QPrinterInfo::getIdStatic()) {
            return (QPrinterInfo*)vp;
          }

          qWarning() << "QPrinterInfo_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QPrinterInfo* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPrinterInfo*: wrapper wraps NULL";
          }

          QPrinterInfo* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPrinterInfo*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPrinterInfo_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPrinterInfo_Wrapper(RJSApi& h, QPrinterInfo* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPrinterInfo_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPrinterInfo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPrinterInfo_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QPrinterInfo
    // Function: printerName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  printerName
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: description
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  description
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: location
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  location
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: makeAndModel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  makeAndModel
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: isDefault
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDefault
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: isRemote
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRemote
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  state
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: supportedPageSizes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedPageSizes
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: defaultPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultPageSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: supportsCustomPageSizes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportsCustomPageSizes
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: minimumPhysicalPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumPhysicalPageSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: maximumPhysicalPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumPhysicalPageSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: supportedResolutions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedResolutions
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: defaultDuplexMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultDuplexMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: supportedDuplexModes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedDuplexModes
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: defaultColorMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultColorMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QPrinterInfo
    // Function: supportedColorModes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedColorModes
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif

          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QPrinterInfo::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QPrinterInfo* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPrinterInfo* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QPrinterInfo* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QPrinterInfo*> basecasters_QPrinterInfo;

      public:
        static void registerBasecaster_QPrinterInfo(RJSBasecaster_QPrinterInfo* bc) {
          basecasters_QPrinterInfo.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QPrinterInfo_Wrapper*)

    Q_DECLARE_INTERFACE(QPrinterInfo_Wrapper, "org.qcad.QPrinterInfo_Wrapper")

  
  #endif
  
