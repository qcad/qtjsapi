
  // Auto generated
  
  #ifndef QFILEDEVICE_H_WRAPPER
  #define QFILEDEVICE_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QDateTime>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QFileDevice>
      
      // singleton class wrapper for static functions:
      class QFileDevice_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QFileDevice_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QFileDevice
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QFileDevice_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QFileDevice
    class QFileDevice_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QFileDevice_Wrapper(const QFileDevice_Wrapper&);

    public:
      // initialization of QFileDevice:
      static void init(RJSApi& handler);

      
        static QFileDevice* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QFile_Type:
              return (QFileDevice*)(QFile*)vp;
          

          // pointer to desired type:
          
              case RJSType::QFileDevice_Type:
                return (QFileDevice*)vp;
            

          default:
            return nullptr;
          }
        }

        static QFileDevice* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QFileDevice*: wrapper wraps NULL";
          }

          QFileDevice* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QFileDevice*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OpenModeFlag {
    NotOpen = QFileDevice::NotOpen,
ReadOnly = QFileDevice::ReadOnly,
WriteOnly = QFileDevice::WriteOnly,
ReadWrite = QFileDevice::ReadWrite,
Append = QFileDevice::Append,
Truncate = QFileDevice::Truncate,
Text = QFileDevice::Text,
Unbuffered = QFileDevice::Unbuffered,
NewOnly = QFileDevice::NewOnly,
ExistingOnly = QFileDevice::ExistingOnly,

  };
  Q_ENUM(OpenModeFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QFileDevice_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QFileDevice_Wrapper(RJSApi& h, QFileDevice* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QFileDevice_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QFileDevice
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  openMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextModeEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTextModeEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOpen
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isReadable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWritable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readChannelCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeChannelCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentReadChannel
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentReadChannel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentWriteChannel
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentWriteChannel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: open
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  open
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: bytesAvailable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bytesAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: bytesToWrite
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bytesToWrite
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readAll
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: canReadLine
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canReadLine
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startTransaction
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  commitTransaction
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rollbackTransaction
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTransactionStarted
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  write
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  skip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: waitForReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForReadyRead
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: waitForBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForBytesWritten
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungetChar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  putChar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: errorString
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void readyRead(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void readyReadEmitter(
                
              );
            
    // Class: QFileDevice
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void channelReadyRead(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void channelReadyReadEmitter(
                int channel
              );
            
    // Class: QFileDevice
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void bytesWritten(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void bytesWrittenEmitter(
                qint64 bytes
              );
            
    // Class: QFileDevice
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void channelBytesWritten(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void channelBytesWrittenEmitter(
                int channel, qint64 bytes
              );
            
    // Class: QFileDevice
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void aboutToClose(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void aboutToCloseEmitter(
                
              );
            
    // Class: QFileDevice
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void readChannelFinished(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void readChannelFinishedEmitter(
                
              );
            
    // Class: QFileDevice
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: unsetError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetError
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: close
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  close
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: isSequential
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSequential
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: handle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handle
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileName
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: seek
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  seek
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: flush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flush
              (

                
              )
              
              ;
            
    // Class: QFileDevice
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: permissions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  permissions
              (

                
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setPermissions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPermissions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QFileDevice
    // Function: fileTime
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fileTime
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QFileDevice
    // Function: setFileTime
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFileTime
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QFileDevice_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QFileDevice* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QFileDevice* getWrapped() const {
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
        QFileDevice* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QFileDevice_Wrapper*)

    Q_DECLARE_INTERFACE(QFileDevice_Wrapper, "org.qcad.QFileDevice_Wrapper")

  
  #endif
  