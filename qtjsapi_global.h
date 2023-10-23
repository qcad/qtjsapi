#include <QtCore/QtGlobal>

#if defined(QTJSAPI_DLL)
#   if defined(QTJSAPI_LIBRARY)
#       define QTJSAPI_EXPORT Q_DECL_EXPORT
#   else
#       define QTJSAPI_EXPORT Q_DECL_IMPORT
#   endif
#else
#   define QTJSAPI_EXPORT
#endif
