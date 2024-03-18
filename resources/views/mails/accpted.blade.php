<!DOCTYPE html>
<html>

<head>
    <title>Payment Acceptance</title>
</head>

<body>
    <div style="text-align: center; width:100%;">
        <img style="width:200px; height:200px; object-fit:cover; border-radius:100%;"
            src="{{ asset('assets/nav_logo.jpg') }}" alt="Logo">
    </div>
    <h1>Congratulations!</h1>
    <p>Hello {{ $user->name }},</p>
    <p>We are pleased to inform you that your order {{ $order->id }} has been Accepted!</p>
    <p>We look forward to seeing you soon.</p>
    <p>Best regards,</p>
    <p>Kyrillos Mamdouh</p>
</body>

</html>
