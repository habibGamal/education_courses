<!DOCTYPE html>
<html>

<head>
    <title>Payment Rejection</title>
</head>

<body>
    <div style="text-align: center; width:100%;">
        <img style="width:200px; height:200px; object-fit:cover; border-radius:100%;"
            src="{{ asset('assets/nav_logo.jpg') }}" alt="Logo">
    </div>
    <h1>Sorry!</h1>
    <p>Hello {{ $user->name }},</p>
    <p>We are sorry to inform you that your order {{ $order->id }} has been Rejected!</p>
    <p>For more information, please contact us.</p>
    <p>Best regards,</p>
    <p>Kyrillos Mamdouh</p>
</body>

</html>
